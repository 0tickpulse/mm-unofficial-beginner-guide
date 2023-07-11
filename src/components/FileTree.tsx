import React from "react";
import styles from "./FileTree.module.css";
import { AiOutlineFolderOpen, AiOutlineFolder, AiOutlineFileText } from "react-icons/ai";
import { BiRightArrow, BiDownArrow } from "react-icons/bi";

type FileTree = File | Folder;
type File = { name: string; type: "file" };
type Folder = { name: string; type: "folder"; children: FileTree[]; defaultOpen?: boolean };

export type FileTreeProps = {
    /**
     * The file tree to display.
     * It is an array of objects, each object representing a file or a folder.
     */
    fileTree: FileTree[];
};

/**
 * A file tree component.
 * Used to display a file system.
 * It is clickable, but does not have any functionality other than display.
 *
 * Folders are foldable.
 */
export default function FileTree({ fileTree }: FileTreeProps) {
    return (
        <div>
            {fileTree.map((fileOrFolder) => (
                <FileTreeItem key={fileOrFolder.name} fileOrFolder={fileOrFolder} />
            ))}
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
    return (
        <span className={styles.box}>
            <button className={styles.foldButton}>
                <TwoIconsAndName b={<AiOutlineFileText className={styles.fileIcon} />} c={<span className={styles.fileName}>{file.name}</span>} />
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
