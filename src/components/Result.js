import React from "react";

function Result(props) {
    return (
        <div>
            {props.location.state.score}
            <h3>Thanks for fnishing the test</h3>
            <p>your result is</p>
        </div>
    );
}

export default Result;
