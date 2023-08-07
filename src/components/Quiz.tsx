import React from "react";
import styles from "./Quiz.module.css";

export type Question = {
    question: React.ReactNode;
    answers: React.ReactNode[];
    correctAnswer: number;
    explanation?: string;
};

type QuizState = {
    selectedAnswer: number | null;
    isSubmitted: boolean;
    isCorrect: boolean;
};

export default function Quiz({ question, answers, correctAnswer, explanation }: Question) {
    const [state, setState] = React.useState<QuizState>({
        selectedAnswer: null,
        isSubmitted: false,
        isCorrect: false,
    });

    const handleClick = (answerIndex: number) => {
        if (!state.isSubmitted) {
            const isCorrect = answerIndex === correctAnswer;
            setState({
                selectedAnswer: answerIndex,
                isSubmitted: true,
                isCorrect: isCorrect,
            });
        }
    };

    const renderAnswers = () => {
        return answers.map((answer, index) => (
            <button
                key={index}
                className={(() => {
                    if (!state.isSubmitted) {
                        return "button button--outline button--secondary";
                    }
                    if (index === correctAnswer) {
                        // correct answer
                        return "button button--outline button--success";
                    }
                    if (!state.isCorrect && index === state.selectedAnswer) {
                        // incorrect answer
                        return "button button--outline button--danger";
                    }
                    return "button button--outline button--secondary";
                })()}
                onClick={() => handleClick(index)}
                disabled={state.isSubmitted}
            >
                {answer}
            </button>
        ));
    };

    return (
        <div className="card">
            <div className="card__header">
                <h3>{question}</h3>
                {state.isSubmitted && explanation !== undefined && (
                    <>
                        {state.isCorrect ? "Correct!" : "Incorrect!"} {explanation}
                    </>
                )}
            </div>
            <div className="card__body">
                <div className={styles.quizButtons}>{renderAnswers()}</div>
            </div>
        </div>
    );
}
