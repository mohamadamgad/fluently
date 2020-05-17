import React from "react";

const container = {
    width: "50%"
};

const answerContainer = {
    display: "grid",
    gridTemplateAreas: '"span span" "span span"'
};
const answerText = {
    border: "1px solid",
    borderRadius: "15px"
};
const answerParagraph = {
    margin: 0
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
