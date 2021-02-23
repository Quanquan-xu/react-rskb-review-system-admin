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
    SimpleForm,
    Edit,
    EditButton,
    Filter,} from 'react-admin';

import UrlField from "./MyUrlField";

export const Buyers = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="buyerID" />
            <TextField source="amzBuyerID" />
            <TextField source="status" />
            <TextField source="note" />
            <EditButton />
        </Datagrid>
    </List>
);

export const BuyerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField disabled source="buyerID" />
            <TextField disabled source="amzBuyerID" />
            <TextField source="manager" />
            <TextField source="status" />
            <TextField source="note" />
        </SimpleForm>
    </Edit>
);

export const BuyerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="buyerID" />
            <TextField source="amzBuyerID" />
            <TextField source="manager" />
            <TextField source="note" />
        </SimpleForm>
    </Create>
);
