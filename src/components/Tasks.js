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


const TaskFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Plan" source="plan" reference="Plans" allowEmpty>
            <SelectInput optionText="planID" />
        </ReferenceInput>
    </Filter>
);

export const Tasks = props =>{
    const classes = useStyles();
    return (
        <List filters={<TaskFilter />} {...props}>
            <Datagrid >
                <ReferenceField source="plan" reference="Plans" label="planID" link={false}>
                    <TextField className={classes.referenceColor} source="planID" />
                </ReferenceField>
                <ReferenceField source="reviewProgress" reference="ReviewProgresses" label="reviewProgress" link={false}>
                    <TextField className={classes.referenceColor} source="english" />
                </ReferenceField>
                <ReferenceField source="orderProgress" reference="OrderProgresses" label="orderProgress" link={false}>
                    <TextField className={classes.referenceColor} source="english" />
                </ReferenceField>
                <TextField source="finish" label="finish"/>
                <TextField source="note" label="note"/>
                <EditButton />
            </Datagrid>
        </List>
    );
}
export const TaskEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="status" />
            <TextInput source="note" />
        </SimpleForm>
    </Edit>
);
