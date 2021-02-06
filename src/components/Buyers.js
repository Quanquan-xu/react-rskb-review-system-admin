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

const MemberFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Favourite" source="name" reference="favourites" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const MemberList = props => (
    <List filters={<MemberFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="編號"/>
        </Datagrid>
    </List>
);
