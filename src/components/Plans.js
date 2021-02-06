import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField ,
    ReferenceInput,
    ReferenceField,
    SelectInput,
    TextInput,
    Create,
    Filter,} from 'react-admin';

import UrlField from "./MyUrlField";

export const Plans = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="index"/>
            <TextField source="planID" label="planID"/>
            <TextField source="asin" label="asin"/>
            <TextField source="planNumber" label="planNumber"/>
            <TextField source="finishNumber" label="finishNumber"/>
            <TextField source="note" label="note"/>
        </Datagrid>
    </List>
);
