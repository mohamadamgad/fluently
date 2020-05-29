import React from "react";
import { Link } from "react-router-dom";
import LanguageDropDown from "./LanguageDropDown";

import Button from "@material-ui/core/Button";

const container = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "baseline"
};

function HomePage() {
    return (
        <div>
            <h2>Welcome to Fluently</h2>
            <div style={container}>
                <LanguageDropDown />

                <Link to="test">
                    <Button variant="contained" color="primary">
                        Start Test
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
