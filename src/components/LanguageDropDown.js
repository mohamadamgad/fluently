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
        color: "#282c34s",
        borderRadius: 4,
        position: "relative",
        border: "1px solid #282c34",
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
        fill: "#282c34"
    }
}));

function LanguageDropDown(props) {
    const classes = useStyles();
    const [language] = React.useState();

    return (
        <>
            <FormControl className={classes.margin}>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={language}
                    onChange={props.handleChange}
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
        </>
    );
}

export default LanguageDropDown;
