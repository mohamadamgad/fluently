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
const correctAnswer = {
    border: "1px solid #2cbe4e",
    borderRadius: "25px",
    justifyItems: "center",
    alignItems: "center",
    cursor: "pointer"
};

const wrongAnswer = {
    border: "1px solid red",
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
    const [myStyle, setmyStyle] = useState({ active: null });
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

    function updateActiveDiv(value) {
        console.log("value", value);
        if (value === myStyle.active) {
            value = null;
        }
        setmyStyle({ active: value });
    }

    return (
        <div style={container}>
            <h2>Question {questionNumber + 1}/20</h2>
            <h3>{data[questionNumber] && data[questionNumber].question}</h3>
            <div style={answerContainer}>
                {data[questionNumber] &&
                    data[questionNumber].answers.map((answer, index) => {
                        let color =
                            myStyle.active === index && answer.check === 1
                                ? correctAnswer
                                : myStyle.active === index && answer.check === 0
                                ? wrongAnswer
                                : answerText;
                        return (
                            <span
                                key={answer.id}
                                onClick={() => updateActiveDiv(index)}
                                // onClick={() => selectAnswer(answer)}
                                style={color}
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
