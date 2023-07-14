import React from "react";
import { AiOutlineFileText, AiOutlineFolder, AiOutlineFolderOpen } from "react-icons/ai";
import { BiDownArrow, BiLogoJava, BiLogoJavascript, BiLogoTypescript, BiRightArrow } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import styles from "./FileTree.module.css";

type FileTree = File | Folder;
type File = { name: string; type: "file" };
type Folder = { name: string; type: "folder"; children: FileTree[]; defaultOpen?: boolean };

const EXT_MAP: Record<string, React.ReactNode> = {
    // Java
    ".java": <BiLogoJava className={styles.fileIcon} />,
    ".jar": <BiLogoJava className={styles.fileIcon} />,
    ".class": <BiLogoJava className={styles.fileIcon} />,

    // JS/JSON/TS
    ".js": <BiLogoJavascript className={styles.fileIcon} />,
    ".json": <VscJson className={styles.fileIcon} />,
    ".ts": <BiLogoTypescript className={styles.fileIcon} />,

    // Ellipsis
    ".": null
};
const EXT_DEFAULT = <AiOutlineFileText className={styles.fileIcon} />;

function extIconFor(ext: string): React.ReactNode {
    if (ext in EXT_MAP) {
        return EXT_MAP[ext];
    }
    return EXT_DEFAULT;
}

export type FileTreeProps = {
    /**
     * The file tree to display.
     * It is an array of objects, each object representing a file or a folder.
     */
    fileTree: FileTree[];
    title?: string;
};

/**
 * A file tree component.
 * Used to display a file system.
 * It is clickable, but does not have any functionality other than display.
 *
 * Folders are foldable.
 */
export default function FileTree({ fileTree, title }: FileTreeProps) {
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
    return (
        <div className={styles.fileTreeItem}>
            {fileOrFolder.type === "file" ? <FileTreeFile file={fileOrFolder} /> : <FileTreeFolder {...fileOrFolder} />}
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
