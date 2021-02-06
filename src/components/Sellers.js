import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { NullableBooleanInput } from 'react-admin';

import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    Filter,
} from 'react-admin';

const FavouriteFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const FavouriteList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={<FavouriteFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" label="編號"/>
                    <TextField source="name" label="類目"/>
                    <TextField source="description" label="描述"/>
                    <TextField source="status" label="狀態"/>
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

const FavouriteTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const FavouriteEdit = props => (
    <Edit title={<FavouriteTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" label="編號"/>
            <TextInput source="name" label="類目"/>
            <TextInput multiline source="description" label="描述"/>
            <NullableBooleanInput label="狀態" source="status" />
        </SimpleForm>
    </Edit>
);

export const FavouriteCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="類目"/>
            <TextInput multiline source="description" label="描述"/>
        </SimpleForm>
    </Create>
);
