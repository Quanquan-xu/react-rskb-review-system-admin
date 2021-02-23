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
    Edit,
    EditButton,
    SimpleForm,
    Create,
    Filter,} from 'react-admin';

import UrlField from "./MyUrlField";
import {useStyles} from "./customCss";


const OrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Plan" source="id" reference="Plans" allowEmpty>
            <SelectInput optionText="asin" />
        </ReferenceInput>
    </Filter>
);

export const Orders = props =>{
    const classes = useStyles();
    return (
        <List filters={<OrderFilter />} {...props}>
            <Datagrid >
                <ReferenceField source="plan" reference="Plans" label="planID" link={false} >
                    <TextField source="planID"  className={classes.noWrapText}/>
                </ReferenceField>
                <TextField source="orderNumber" />
                <TextField source="orderedDate" />
                <TextField source="postDate" />
                <TextField source="message" />
                <ReferenceField source="id" reference="Reviews" label="reviewTitle" link={false}>
                    <TextField source="title" className={classes.referenceColor}/>
                </ReferenceField>
                <ReferenceField source="id" reference="Reviews" label="reviewContent" link={false}>
                    <TextField source="content" className={classes.referenceColor}/>
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
}
export const OrderEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="seller" reference="Sellers" >
                <SelectInput optionText="sellerName" />
            </ReferenceInput>
            <ReferenceInput source="buyer" reference="Buyers">
                <SelectInput optionText="buyerID" />
            </ReferenceInput>
            <TextInput source="orderNumber" />
            <TextInput source="price" />
            <TextInput source="postDate" />
            <TextInput source="postBy" />
            <TextInput source="note" />
            <TextInput source="diabled" />
        </SimpleForm>
    </Edit>
);
