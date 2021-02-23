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
    SimpleForm,
    Edit,
    EditButton,
    Filter,} from 'react-admin';

import UrlField from "./MyUrlField";


export const Progresses = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID"/>
            <TextField source="code" label="Code"/>
            <TextField source="chinese" label="Chinese"/>
            <TextField source="english" label="English"/>
            <TextField source="korean" label="Korean"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const ProgressEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="code" />
            <TextInput source="chinses" />
            <TextInput source="english" />
            <TextInput source="korean" />
        </SimpleForm>
    </Edit>
);
