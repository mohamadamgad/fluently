import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

function HomePage() {
    return (
        <div>
            <h2>Welcome to Fluently</h2>
            <Link to="test">
                <Button variant="contained" color="primary">
                    Start Test
                </Button>
            </Link>
        </div>
    );
}

export default HomePage;
