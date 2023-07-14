import React from "react";
import styles from "./ServerCmdGenerator.module.css";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

type ServerOptions = {
    jarFilename: string;
    serverRamGB: number;
    gui: boolean;
    autoRestart: boolean;
};

const OTHER_OPTIONS_DEFAULT: ServerOptions = {
    jarFilename: "server.jar",
    serverRamGB: 4,
    gui: false,
    autoRestart: false,
};

function generateScript({ jarFilename, serverRamGB, gui, autoRestart }: ServerOptions, os: "windows" | "unix"): string {
    const ram = serverRamGB * 1024;
    let javaCmd = `java -Xms${ram}M -Xmx${ram}M --add-modules=jdk.incubator.vector -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -jar ${jarFilename}`;
    if (!gui) {
        javaCmd += " --nogui";
    }
    switch (os) {
        case "windows": {
            let cmd = "";
            if (autoRestart) {
                cmd += ":start\n\n";
            }
            cmd += javaCmd;
            if (autoRestart) {
                cmd += '\n\necho "Server is restarting! Press Ctrl+C to stop the server."';
                cmd += "\ngoto :start";
            }
            return cmd;
        }
        case "unix": {
            let cmd = "#!/bin/bash\n\n";
            if (autoRestart) {
                cmd += "while true; do\n";
                cmd += "    " + javaCmd;
            } else {
                cmd += javaCmd;
            }
            if (autoRestart) {
                cmd += '\n\n    echo "Server is restarting! Press Ctrl+C to stop the server."';
                cmd += "\ndone";
            }
            return cmd;
        }
    }
}

export default function ServerCmdGenerator() {
    const [options, setOptions] = React.useState(OTHER_OPTIONS_DEFAULT);
    const { jarFilename, serverRamGB, gui, autoRestart } = options;
    return (
        <div className="card">
            <div className="card__header">
                <h3>Server Script Creator</h3>
                Use this tool to generate a script to run your server. Adapted from <a href="https://flags.sh" target="_blank">flags.sh</a>.
            </div>
            <div className="card__body">
                <div className={styles.flagGenerator}>
                    <div>
                        <h4>Jar filename</h4>
                        <input
                            type="text"
                            value={jarFilename}
                            onChange={(e) => setOptions({ ...options, jarFilename: e.target.value })}
                            className="tick-input"
                        />
                    </div>
                    <div>
                        <h4>Server RAM</h4>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                // add gap between slider and text
                                gap: "1rem",
                                // center vertically
                                alignItems: "center",
                            }}
                        >
                            <input
                                type="range"
                                min="0.5"
                                max="24"
                                step="0.5"
                                defaultValue={serverRamGB}
                                className="tick-input-slider"
                                onChange={(e) => setOptions({ ...options, serverRamGB: Number(e.target.value) })}
                            />
                            <span>{serverRamGB} GB</span>
                        </div>
                        {serverRamGB < 4 && <span style={{ color: "var(--ifm-color-danger)" }}>⚠️ less than 4 GB is not recommended</span>}
                        <a href="https://www.gktoday.in/topic/rapid-access-memory-ram/">{"\n"}More on RAM</a>
                    </div>
                    <div>
                        <h4>Other options</h4>
                        <div>
                            <input
                                type="checkbox"
                                id="gui"
                                name="gui"
                                value="gui"
                                checked={gui}
                                onChange={(e) => setOptions({ ...options, gui: e.target.checked })}
                            />
                            <label htmlFor="gui">GUI</label>
                        </div>
                        <small>Enables a GUI control panel.</small>
                        <div>
                            <input
                                type="checkbox"
                                id="autoRestart"
                                name="autoRestart"
                                value="autoRestart"
                                checked={autoRestart}
                                onChange={(e) => setOptions({ ...options, autoRestart: e.target.checked })}
                            />
                            <label htmlFor="autoRestart">Auto restart</label>
                        </div>
                        <small>Automatically restarts the server when it crashes/stops.</small>
                    </div>
                </div>
                <div>
                    <Tabs groupId="os">
                        <TabItem value="windows" label="Windows">
                            <CodeBlock language="bash">{generateScript(options, "windows")}</CodeBlock>
                            <p>
                                Save this as <code>start.bat</code>. Next time, you can run it by typing <code>start.bat</code> in the terminal.
                            </p>
                        </TabItem>
                        <TabItem value="unix" label="MacOS/Linux">
                            <CodeBlock language="bash">{generateScript(options, "unix")}</CodeBlock>
                            <p>
                                Save this as <code>start.sh</code>. Next time, you can run it by typing <code>sh ./start.sh</code> in the terminal.
                            </p>
                        </TabItem>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
