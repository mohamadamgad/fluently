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
            <h3>Thanks for finishing the test</h3>
            <p>
                You are &nbsp;
                <span style={score >= 50 ? goodResult : poorResult}>
                    {score} %
                </span>{" "}
                &nbsp; Fluent in {props.location.state.language}
            </p>
        </div>
    );
}

export default Result;
