import styles from "./QuizGrid.module.css";
import React from "react";

export type QuizGridProps = {
    children: React.ReactNode;
};
export default function QuizGrid({ children }: QuizGridProps) {
    return (
        <div className={styles.grid}>
            {React.Children.map(children, (child, index) => (
                <div className={styles.gridItem} key={index}>
                    {child}
                </div>
            ))}
        </div>
    );
}
