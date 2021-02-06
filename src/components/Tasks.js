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

const TaskFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Plan" source="plan" reference="Plans" allowEmpty>
            <SelectInput optionText="planID" />
        </ReferenceInput>
    </Filter>
);

export const Tasks = props => (
    <List filters={<TaskFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="taskID"/>

            <ReferenceField source="plan" reference="Plans">
                <TextField source="planID" label="planID"/>
            </ReferenceField>

            <TextField source="reviewProgress" label="reviewProgress"/>
            <TextField source="orderProgress" label="orderProgress"/>
            <TextField source="finish" label="finish"/>
            <TextField source="note" label="note"/>
        </Datagrid>
    </List>
);
