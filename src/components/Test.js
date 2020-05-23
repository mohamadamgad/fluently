import React, { useState, useEffect } from "react";
import { getTest } from "../api/dataApi";

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
    const [data, setData] = useState([]);
    let [questionNumber, setQuestionNumber] = useState(0);
    const [answerTextStyle, setanswerTextStyle] = useState(answerText);
    useEffect(() => {
        async function getData() {
            const res = await getTest();
            setData(res);
        }
        getData();
    }, []);

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
            <h3>{data[questionNumber] && data[questionNumber].question}</h3>
            <div style={answerContainer}>
                {data[questionNumber] &&
                    data[questionNumber].answers.map(answer => {
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
