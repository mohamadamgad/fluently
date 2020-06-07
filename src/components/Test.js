import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { loadTest } from "../actions/testActions";
import testStore from "../stores/testStore";
import Radium from "radium";

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
    cursor: "pointer",
    ":hover": {
        borderRadius: "2px"
    }
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

function Test(props) {
    const selectedLanguage = props.location.state.language;
    const [score, setScore] = useState(0);
    const history = useHistory();
    const [myStyle, setmyStyle] = useState({ active: null });
    const [data, setData] = useState([]);
    let [questionNumber, setQuestionNumber] = useState(0);
    const [disableClick, setDisableClick] = useState({ pointerEvents: null });

    useEffect(() => {
        testStore.addChangeListener(onChange);
        loadTest(selectedLanguage);
        return () => testStore.removeChangeListener(onChange);
    }, [selectedLanguage]);

    function onChange() {
        setData(testStore.getTest());
    }

    function calculateScore(answer) {
        if (answer.check === 1) {
            setScore(prevScore => prevScore + 1);
        }
    }

    function selectAnswer(value, answer) {
        if (value === myStyle.active) {
            value = null;
        }

        setmyStyle({ active: value });
        setDisableClick({ pointerEvents: "none" });

        calculateScore(answer);

        if (!data[questionNumber + 1]) {
            history.push({
                pathname: "/result",
                state: {
                    _score: score,
                    language: getLanaguageName(selectedLanguage)
                }
            });
        }

        setTimeout(() => {
            setQuestionNumber(questionNumber + 1);
            setDisableClick({ pointerEvents: null });
            setmyStyle({ active: null });
        }, 1000);
    }

    function getLanaguageName(languageId) {
        console.log("language", languageId);
        let language = "";

        languageId === "0"
            ? (language = "English")
            : languageId === "1"
            ? (language = "Español")
            : (language = "Deutsch");

        return language;
    }

    return (
        <div style={Object.assign({}, container, disableClick)}>
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
                                onClick={() => selectAnswer(index, answer)}
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
