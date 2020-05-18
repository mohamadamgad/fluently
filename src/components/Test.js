import React from "react";

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

function selectAnswer(e) {
    e.preventDefault();
    console.log("select answer", e.target);
}

const data = {
    question: "There isn't ....... sugar in this coffee!",
    answers: [
        { id: 1, text: "over" },
        { id: 2, text: "no" },
        { id: 3, text: "any" },
        { id: 4, text: "some" }
    ]
};

function Test() {
    return (
        <div style={container}>
            <h2>Question 1/20</h2>
            <h3>{data.question}</h3>
            <div style={answerContainer}>
                {data.answers.map(answer => {
                    return (
                        <span key={answer.id} style={answerText}>
                            <p onClick={selectAnswer} style={answerParagraph}>
                                {answer.text}
                            </p>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}

export default Test;
