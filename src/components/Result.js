import React from "react";

const goodResult = {
    color: "#2cbe4e",
    fontWeight: "bold"
};

const poorResult = {
    color: "red",
    fontWeight: "bold"
};

function Result(props) {
    const score = Math.floor((props.location.state._score / 20) * 100);
    return (
        <div>
            <h4>You are</h4>
            <h2>
                <span style={score >= 50 ? goodResult : poorResult}>
                    {score} %
                </span>{" "}
            </h2>
            <h2>Fluent in {props.location.state.language}</h2>
        </div>
    );
}

export default Result;
