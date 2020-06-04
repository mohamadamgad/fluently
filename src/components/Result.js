import React from "react";

const resultNumber = {
    color: "#2cbe4e",
    fontWeight: "bold"
};

function Result(props) {
    return (
        <div>
            <h3>Thanks for finishing the test</h3>
            <p>
                You are &nbsp;
                <span style={resultNumber}>
                    {Math.floor((props.location.state._score / 20) * 100)} %
                </span>{" "}
                &nbsp; Fluent in {props.location.state.language}
            </p>
        </div>
    );
}

export default Result;
