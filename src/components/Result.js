import React from "react";

function Result(props) {
    return (
        <div>
            <h3>Thanks for fnishing the test</h3>
            <p>
                You are {((props.location.state._score + 1) / 20) * 100} %
                Fluent in English
            </p>
        </div>
    );
}

export default Result;
