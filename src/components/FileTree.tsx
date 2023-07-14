import React from "react";
import { AiOutlineFileText, AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";
import { BiCoffee, BiDownArrow, BiLogoJavascript, BiLogoTypescript, BiRightArrow } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import styles from "./FileTree.module.css";

type FileTree = File | Folder;
type File = { name: string; type: "file"; highlight?: boolean };
type Folder = { name: string; type: "folder"; children?: FileTree[]; defaultOpen?: boolean; highlight?: boolean };

function isFile(fileOrFolder: FileTree): fileOrFolder is File {
    return fileOrFolder.type === "file";
}

function isFolder(fileOrFolder: FileTree): fileOrFolder is Folder {
    return fileOrFolder.type === "folder";
}

const EXT_MAP: Record<string, React.ReactNode> = {
    // Java
    ".java": <BiCoffee className={styles.fileIcon} />,
    ".jar": <BiCoffee className={styles.fileIcon} />,
    ".class": <BiCoffee className={styles.fileIcon} />,

    // JS/JSON/TS
    ".js": <BiLogoJavascript className={styles.fileIcon} />,
    ".json": <VscJson className={styles.fileIcon} />,
    ".ts": <BiLogoTypescript className={styles.fileIcon} />,

    // Ellipsis
    ".": null,
};
const EXT_DEFAULT = <AiOutlineFileText className={styles.fileIcon} />;

function extIconFor(ext: string): React.ReactNode {
    if (ext in EXT_MAP) {
        return EXT_MAP[ext];
    }
    return EXT_DEFAULT;
}

export type FileTreeProps = (
    | {
          /**
           * The file tree to display.
           * It is an array of objects, each object representing a file or a folder.
           */
          fileTree: FileTree[];
      }
    | {
          /**
           * The paths to display.
           * Dynamically generates a file tree from the paths.
           */
          paths: string[];
      }
) & { title?: string };

function transformPath<T extends FileTree>(path: T): T {
    const cloned = { ...path };

    const idx = cloned.name.indexOf(":");
    if (idx !== -1) {
        let matched = false;
        const prefix = cloned.name.substring(0, idx);
        const modes = prefix.split(",");
        if (modes.includes("highlight")) {
            cloned.highlight = true;
            matched = true;
        }
        if (modes.includes("defaultOpen") && isFolder(cloned)) {
            cloned.defaultOpen = true;
            matched = true;
        }
        if (matched) {
            cloned.name = cloned.name.substring(idx + 1);
        }
    }

    return cloned;
}

function fileTreeFromPaths(paths: string[]): FileTree[] {
    const root: Folder = {
        name: "",
        type: "folder",
        children: [],
        defaultOpen: true,
    };

    const addFileToTree = (file: string, parent: Folder) => {
        const segments = file.split("/");
        let currentFolder = parent;

        for (let i = 0; i < segments.length - 1; i++) {
            const folderName = segments[i];
            const existingFolder = currentFolder.children.find((child) => isFolder(child) && child.name === folderName) as Folder | undefined;

            if (existingFolder) {
                currentFolder = existingFolder;
            } else {
                const newFolder: Folder = transformPath({
                    name: folderName,
                    type: "folder",
                    children: [],
                    defaultOpen: false,
                    highlight: false,
                });
                currentFolder.children.push(newFolder);
                currentFolder = newFolder;
            }
        }

        const fileName = segments[segments.length - 1];
        const newFile: File = transformPath({
            name: fileName,
            type: "file",
        });
        if (fileName.trim() === "") {
            return; // ignore empty file names (e.g. trailing slash for folders)
        }
        currentFolder.children.push(newFile);
    };

    paths.forEach((path) => {
        addFileToTree(path, root);
    });

    return root.children;
}

/**
 * A file tree component.
 * Used to display a file system.
 * It is clickable, but does not have any functionality other than display.
 *
 * Folders are foldable.
 */
export default function FileTree(props: FileTreeProps) {
    const { title } = props;
    const fileTree = "fileTree" in props ? props.fileTree : fileTreeFromPaths(props.paths);
    return (
        <div className="card">
            {title && <div className="card__header">{title}</div>}
            <div className="card__body">
                {fileTree.map((fileOrFolder) => (
                    <FileTreeItem key={fileOrFolder.name} fileOrFolder={fileOrFolder} />
                ))}
            </div>
        </div>
    );
}

type FileTreeItemProps = {
    fileOrFolder: FileTree;
};

function FileTreeItem({ fileOrFolder }: FileTreeItemProps) {
    const item = fileOrFolder.type === "file" ? <FileTreeFile file={fileOrFolder} /> : <FileTreeFolder {...fileOrFolder} />;
    return (
        <div className={styles.fileTreeItem}>
            {
                // Highlight the file/folder if it is marked as such
                fileOrFolder.highlight ? <div className={styles.highlight}>{item}</div> : <div>{item}</div>
            }
        </div>
    );
}

type FileTreeFileProps = {
    file: File;
};

function FileTreeFile({ file }: FileTreeFileProps) {
    const idx = file.name.lastIndexOf(".");
    const ext = idx === -1 ? undefined : file.name.substring(idx);
    const icon = extIconFor(ext ?? ".");
    return (
        <span className={styles.box}>
            <button className={styles.foldButton}>
                <TwoIconsAndName b={icon} c={<span className={styles.fileName}>{file.name}</span>} />
            </button>
        </span>
    );
}

/**
 * Simple wrapper component to display two icons side by side with a name.
 */
function TwoIconsAndName({
    a,
    b,
    c,
    ...props
}: { a?: React.ReactNode; b?: React.ReactNode; c?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <span className={styles.twoIcons} {...props}>
            {a}
            {b}
            {c}
        </span>
    );
}

function FileTreeFolder({ children, name, defaultOpen = false }: Folder) {
    const [isFolded, setIsFolded] = React.useState(!defaultOpen);

    return (
        <>
            <span className={styles.box}>
                <button className={styles.foldButton} onClick={() => setIsFolded(!isFolded)}>
                    <TwoIconsAndName
                        a={isFolded ? <BiRightArrow /> : <BiDownArrow />}
                        b={isFolded ? <AiOutlineFolder /> : <AiOutlineFolderOpen />}
                        c={<span className={styles.fileName}>{name}</span>}
                    />
                </button>
            </span>

            {!isFolded && (
                <div>
                    {children.map((fileOrFolder) => (
                        <FileTreeItem key={fileOrFolder.name} fileOrFolder={fileOrFolder} />
                    ))}
                </div>
            )}
        </>
    );
}
