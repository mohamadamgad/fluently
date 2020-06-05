import React from "react";
import LanguageDropDown from "./LanguageDropDown";

import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const container = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline"
};

function HomePage() {
    const history = useHistory();
    let languageSelected = 0;

    function handleClick() {
        history.push({
            pathname: "/test",
            state: {
                language: languageSelected
            }
        });
    }
    function handleSelect(event) {
        languageSelected = event.target.value;
        return event.target.value;
    }
    return (
        <div>
            <h2>Welcome to Fluently</h2>
            <div style={container}>
                <LanguageDropDown handleChange={handleSelect} />
                <Button
                    variant="contained"
                    onClick={handleClick}
                    color="primary"
                >
                    Start Test
                </Button>
            </div>
        </div>
    );
}

export default HomePage;
