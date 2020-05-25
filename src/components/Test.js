import React, { useState, useEffect } from "react";
import { getTest } from "../api/dataApi";

const container = {
    width: "50%"
};

const answerContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 50%)",
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
    useEffect(() => {
        async function getData() {
            const res = await getTest();
            setData(res);
        }
        getData();
    }, []);

    function selectAnswer(value) {
        console.log("value", value);
        if (value === myStyle.active) {
            value = null;
        }
        setmyStyle({ active: value });
        if (!data[questionNumber + 1]) return;

        setTimeout(() => {
            setQuestionNumber(questionNumber + 1);
            setmyStyle({ active: null });
        }, 1000);
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
                                onClick={() => selectAnswer(index)}
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
