import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField ,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter,} from 'react-admin';

import UrlField from "./MyUrlField";

const ReviewFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="计划ID" source="id" reference="ReviewPlanings" allowEmpty>
            <SelectInput optionText="id" />
        </ReferenceInput>
    </Filter>
);

export const Reviews = props => (
    <List filters={<ReviewFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID"/>
            <TextField source="title" label="title"/>
            <TextField source="content" label="content"/>
        </Datagrid>
    </List>
);
