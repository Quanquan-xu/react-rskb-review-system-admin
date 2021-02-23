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
import {useStyles} from "./customCss";
import {StatusShow} from "./customTextFields";

const ReviewFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="ID" source="id" reference="Plans" allowEmpty>
            <SelectInput optionText="id" />
        </ReferenceInput>
    </Filter>
);

export const Reviews = props => {
    const classes = useStyles();
    return (
        <List filters={<ReviewFilter />} {...props}>
            <Datagrid rowClick="edit">
                <ReferenceField source="plan" reference="Plans" label="planID" link={false}>
                    <TextField className={classes.referenceColor} source="planID" />
                </ReferenceField>
                <TextField source="priority" label="priority"/>
                <TextField source="message" label="message"/>
                <StatusShow source="finish" label="finish" sortByOrder="ASC"/>
                <EditButton />
            </Datagrid>
        </List>
    );
}


export const ReviewEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="content" />
            <TextInput source="note" />
        </SimpleForm>
    </Edit>
);
