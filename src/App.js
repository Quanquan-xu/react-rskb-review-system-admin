import * as React from "react";
import { Admin, Resource} from 'react-admin';

import Dashboard from './components/Dashboard';
import {Plans} from './components/Plans';
import {Tasks} from "./components/Tasks"
import {Orders} from "./components/Orders"
import {Reviews} from "./components/Reviews"

//import authProvider from './components/authProvider';

import UserIcon from '@material-ui/icons/Group';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

import loopbackClient, { authProvider } from 'react-admin-loopback';

const apiUrl = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api";

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={loopbackClient(apiUrl)} >
        <Resource name="Plans" list={Plans} icon={AddToPhotosIcon} options={{ label: 'Plans' }}/>
        <Resource name="Tasks" list={Tasks} icon={AssignmentIcon} options={{ label: 'Tasks' }}/>
        <Resource name="Orders" list={Orders} icon={ImportantDevicesIcon} options={{ label: 'Orders' }}/>
        <Resource name="Reviews" list={Reviews} icon={StarHalfIcon} options={{ label: 'Reviews' }}/>
    </Admin>
);
export default App;
