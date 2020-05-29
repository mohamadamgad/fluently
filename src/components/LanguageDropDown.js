import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3)
        }
    },
    input: {
        color: "#fff",
        borderRadius: 4,
        position: "relative",
        border: "1px solid #fff",
        fontSize: 16,
        padding: "8px 26px 8px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            borderRadius: 4,
            boxShadow: "0 0 0 0 rgba(255,255,255,1)"
        }
    }
}))(InputBase);

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    whiteColor: {
        fill: "#fff"
    }
}));

function LanguageDropDown() {
    const classes = useStyles();
    const [age, setAge] = React.useState("");

    const handleChange = event => {
        setAge(event.target.value);
    };
    return (
        <FormControl className={classes.margin}>
            <NativeSelect
                id="demo-customized-select-native"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
                classes={{
                    icon: classes.whiteColor
                }}
            >
                <option value="">Select Language</option>
                <option value={0}>English</option>
                <option value={1}>Español</option>
                <option value={2}>Deutsch</option>
            </NativeSelect>
        </FormControl>
    );
}

export default LanguageDropDown;
