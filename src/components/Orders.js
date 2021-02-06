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

const OrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Plan" source="id" reference="Plans" allowEmpty>
            <SelectInput optionText="asin" />
        </ReferenceInput>
    </Filter>
);

export const Orders = props => (
    <List filters={<OrderFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="編號"/>
            <ReferenceField source="id" reference="Tasks">
                <TextField source="id" label="任务"/>
            </ReferenceField>
            <TextField source="plan" label="计划"/>
        </Datagrid>
    </List>
);
