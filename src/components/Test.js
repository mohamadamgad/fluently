import React, { useState } from "react";

const container = {
    width: "50%"
};

const answerContainer = {
    display: "inline-grid",
    gridTemplateAreas: '"span span" "span span"',
    gridGap: "20px 12px",
    width: "100%"
};
const answerText = {
    border: "1px solid",
    borderRadius: "25px",
    justifyItems: "center",
    alignItems: "center",
    cursor: "pointer"
};
const answerParagraph = {
    margin: 0,
    padding: "10px"
};

const dataObj = [
    {
        id: 1,
        question: "There isn't ....... sugar in this coffee!",
        answers: [
            { id: 0, text: "over", check: 0 },
            { id: 1, text: "no", check: 0 },
            { id: 2, text: "any", check: 1 },
            { id: 3, text: "some", check: 0 }
        ]
    },
    {
        id: 2,
        question: ".......... I don't see you before, have a nice holiday.",
        answers: [
            { id: 2, text: "In case", check: 1 },
            { id: 0, text: "Unless", check: 0 },
            { id: 1, text: "Even", check: 0 },
            { id: 3, text: "Although", check: 0 }
        ]
    }
];

function Test() {
    const [data, setData] = useState(dataObj);
    let [questionNumber, setQuestionNumber] = useState(0);
    const [answerTextStyle, setanswerTextStyle] = useState(answerText);
    function selectAnswer(answer) {
        if (answer.check === 1) {
            setanswerTextStyle({
                border: "1px solid #2cbe4e",
                borderRadius: "25px",
                justifyItems: "center",
                alignItems: "center",
                cursor: "pointer"
            });
        }
        if (!data[questionNumber + 1]) return;

        setTimeout(() => {
            setQuestionNumber(questionNumber + 1);
            setanswerTextStyle(answerText);
        }, 1000);
    }
    return (
        <div style={container}>
            <h2>Question {questionNumber + 1}/20</h2>
            <h3>{data[questionNumber].question}</h3>
            <div style={answerContainer}>
                {data[questionNumber].answers.map(answer => {
                    return (
                        <span
                            key={answer.id}
                            onClick={() => selectAnswer(answer)}
                            style={
                                answer.check === 1
                                    ? answerTextStyle
                                    : answerText
                            }
                        >
                            <p style={answerParagraph}>{answer.text}</p>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default Test;
