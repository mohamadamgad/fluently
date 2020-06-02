import React from "react";

function Result(props) {
    return (
        <div>
            <h3>Thanks for finishing the test</h3>
            <p>
                You are &nbsp;
                <b>{(props.location.state._score / 20) * 100} %</b> &nbsp;
                Fluent in {props.location.state.language}
            </p>
        </div>
    );
}

export default Result;
