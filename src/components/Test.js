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

function Test() {
    return (
        <div style={container}>
            <h3>There isn't ....... sugar in this coffee!</h3>
            <div style={answerContainer}>
                <span style={answerText}>
                    <p style={answerParagraph}>over</p>
                </span>
                <span style={answerText}>
                    <p style={answerParagraph}>no</p>
                </span>
                <span style={answerText}>
                    <p style={answerParagraph}>any</p>
                </span>
                <span style={answerText}>
                    <p style={answerParagraph}>some</p>
                </span>
            </div>
        </div>
    );
}

export default Test;
