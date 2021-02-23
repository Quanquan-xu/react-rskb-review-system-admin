import * as React from "react";
import { Admin, Resource} from 'react-admin';

import Dashboard from './components/Dashboard';
import {Sellers,SellerEdit,SellerCreate} from './components/Sellers';
import {Buyers,BuyerEdit,BuyerCreate} from './components/Buyers';
import {Plans,PlanEdit,PlanCreate} from './components/Plans';
import {Tasks,TaskEdit} from "./components/Tasks"
import {Orders,OrderEdit} from "./components/Orders"
import {Reviews,ReviewEdit} from "./components/Reviews"
import {Progresses,ProgressEdit} from "./components/Progresses"

//import authProvider from './components/authProvider';

import UserIcon from '@material-ui/icons/Group';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import ContactsIcon from '@material-ui/icons/Contacts';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import loopbackClient, { authProvider } from 'react-admin-loopback';

const apiUrl = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api";

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={loopbackClient(apiUrl)} >
        <Resource name="Sellers" list={Sellers} edit={SellerEdit} create={SellerCreate} icon={ContactsIcon} options={{ label: 'Sellers' }}/>
        <Resource name="Buyers" list={Buyers} edit={BuyerEdit} create={BuyerCreate} icon={SupervisedUserCircleIcon} options={{ label: 'Buyers' }}/>
        <Resource name="Plans" list={Plans} edit={PlanEdit} create={PlanCreate} icon={AddToPhotosIcon} options={{ label: 'Plans' }}/>
        <Resource name="Tasks" list={Tasks} edit={TaskEdit} icon={AssignmentIcon} options={{ label: 'Tasks' }}/>
        <Resource name="Orders" list={Orders} edit={OrderEdit} icon={ImportantDevicesIcon} options={{ label: 'Orders' }}/>
        <Resource name="Reviews" list={Reviews} edit={ReviewEdit} icon={StarHalfIcon} options={{ label: 'Reviews' }}/>
        <Resource name="ReviewProgresses" />
        <Resource name="OrderProgresses" />
        <Resource name="Priorities"  list={Progresses} edit={ProgressEdit}/>
    </Admin>
);
export default App;
