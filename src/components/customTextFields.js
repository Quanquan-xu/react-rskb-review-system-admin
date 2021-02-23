import * as React from "react";
import {useStyles} from "./customCss";
import LaunchIcon from '@material-ui/icons/Launch';

export const AsinUrl = ({ record = {}, source }) =>{
    const classes = useStyles();
    return(
        <a href={record[source]} className={classes.link}>
            {record[source]}
             <LaunchIcon className={classes.icon} />
        </a>
    );
}


export const StatusShow = ({ record = {}, source }) =>{
    const classes = useStyles();
    if(record[source]){
        return "✅"
    }else{
        return "⏳"
    }
}
