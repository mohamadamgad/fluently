import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

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
    const history = useHistory();

    function handleClick() {
        history.push({
            pathname: "/"
        });
    }
    return (
        <div>
            <h4>You are</h4>
            <h2>
                <span style={score >= 50 ? goodResult : poorResult}>
                    {score} %
                </span>{" "}
            </h2>
            <h2>Fluent in {props.location.state.language}</h2>
            <Button variant="contained" onClick={handleClick} color="primary">
                Home Page
            </Button>
        </div>
    );
}

export default Result;
