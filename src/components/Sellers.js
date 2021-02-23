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
    SimpleForm,
    Edit,
    EditButton,
    Create,
    Filter,} from 'react-admin';

import UrlField from "./MyUrlField";

export const Sellers = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="sellerName" />
            <TextField source="marketPlace" />
            <TextField source="status" />
            <TextField source="note" />
            <EditButton />
        </Datagrid>
    </List>
);
export const SellerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextField source="sellerName" />
            <TextField source="marketPlace" />
            <TextField source="manager" />
            <TextField source="status" />
            <TextField source="note" />
        </SimpleForm>
    </Edit>
);

export const SellerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="sellerName" />
            <TextField source="marketPlace" />
            <TextField source="manager" />
            <TextField source="note" />
        </SimpleForm>
    </Create>
);
