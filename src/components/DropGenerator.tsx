import React from "react";
import CodeBlock from "@theme/CodeBlock";

const MATERIAL_IDS = ["test1", "test2", "test3", "stone" /* ... */];

type Drop = {
    materialId: string;
    dropChance: number;
    dropAmountMin: number;
    dropAmountMax: number;
};

const DROP_DEFAULT: Drop = {
    materialId: "stone",
    dropChance: 100,
    dropAmountMin: 1,
    dropAmountMax: 1,
};

function generateDrop({ materialId, dropChance, dropAmountMin, dropAmountMax }: Drop): string {
    const dropAmount = dropAmountMin === dropAmountMax ? dropAmountMin : `${dropAmountMin}-${dropAmountMax}`;
    return `  - ${materialId} ${dropAmount} ${Number.isNaN(dropChance) ? 100 : dropChance / 100}`;
}

export default function DropGenerator() {
    const [drops, setDrops] = React.useState<Drop>(DROP_DEFAULT);

    return (
        <div className="card">
            <div className="card__header">
                <h3>Drop Generator</h3>
                Use this tool to generate a mythic drop.
            </div>
            <div className="card__body dynamic-grid">
                <div>
                    <h4>Item</h4>
                    <input
                        className="tick-input"
                        type="text"
                        list="materials"
                        value={drops.materialId}
                        onChange={(e) => setDrops({ ...drops, materialId: e.target.value })}
                    />
                </div>
                <div>
                    <h4>Drop Chance</h4>
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
                            className="tick-input-slider"
                            type="range"
                            min={0}
                            max={100}
                            value={drops.dropChance}
                            onChange={(e) => setDrops({ ...drops, dropChance: parseInt(e.target.value) })}
                        />
                        <span>{drops.dropChance}%</span>
                    </div>
                </div>
                <div>
                    <h4>Minimum Amount</h4>
                    <input
                        className="tick-input"
                        type="number"
                        min={0}
                        value={drops.dropAmountMin}
                        onChange={(e) => setDrops({ ...drops, dropAmountMin: parseInt(e.target.value) })}
                    />
                </div>
                <div>
                    <h4>Maximum Amount</h4>
                    <input
                        className="tick-input"
                        type="number"
                        min={0}
                        value={drops.dropAmountMax}
                        onChange={(e) => setDrops({ ...drops, dropAmountMax: parseInt(e.target.value) })}
                    />
                </div>
                <div>
                    <h4>Result</h4>
                    <CodeBlock language="yaml">{generateDrop(drops)}</CodeBlock>
                </div>
            </div>
        </div>
    );
}
