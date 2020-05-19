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

const data = {
    question: "There isn't ....... sugar in this coffee!",
    answers: [
        { id: 0, text: "over", check: 0 },
        { id: 1, text: "no", check: 0 },
        { id: 2, text: "any", check: 1 },
        { id: 3, text: "some", check: 0 }
    ]
};

function Test() {
    const [answerTextStyle, setanswerTextStyle] = useState(answerText);
    function selectAnswer(answer) {
        if (answer.check === 1) {
            console.log("select answer before", answerTextStyle);
            setanswerTextStyle({
                border: "1px solid green",
                borderRadius: "25px",
                justifyItems: "center",
                alignItems: "center",
                cursor: "pointer"
            });
            console.log("select answer after", answerTextStyle);
        }
    }
    return (
        <div style={container}>
            <h2>Question 1/20</h2>
            <h3>{data.question}</h3>
            <div style={answerContainer}>
                {data.answers.map((answer, index) => {
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
