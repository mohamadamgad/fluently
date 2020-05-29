import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "baseline"
    }
}));

function HomePage() {
    const classes = useStyles();
    const [age, setAge] = React.useState("");

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <div>
            <h2>Welcome to Fluently</h2>
            <div className={classes.container}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

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
