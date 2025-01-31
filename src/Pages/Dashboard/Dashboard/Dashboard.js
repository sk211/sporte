import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth'
import './Dashboard.css'

const Dashboard = () => {
    const {admin , logOut } = useAuth()
    
    return (
        <div className='raw'>
            <div className='col-md-3 col-lg-3 col-sm-6'>
            <div className='sidebar'>
            
            <div className="top">
                <span className="logo">Sports Club</span>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <Link className='link-style-das'  to={`/`} >  <li className='dashboard-li'>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li></Link>
                    <p className="title">List</p>
                    <li className='dashboard-li'> 
                        <PersonOutlineOutlinedIcon className='icon'/>
                    <span>Users</span>
                    </li>
                   <Link to={`/dashboard/addproduct`}>
                   <li className='dashboard-li'>
                        <Inventory2RoundedIcon className='icon'/>
                        <span>Add-Products</span>
                        </li></Link>
                    {/* <li>
                        <BorderColorIcon className='icon'/>
                        <span>Orders</span>
                        </li> */}
                    <Link to={`/dashboard/addreview`}>
                    <li className='dashboard-li'>
                        <LocalShippingIcon className='icon'/>
                        <span>Add-Review</span>
                        </li>
                    </Link>
                        <p className="title">Useful</p>
                   <Link to={`/dashboard/addadmin`}>
                   <li className='dashboard-li'>
                        <AssessmentIcon className='icon'/>
                        <span> Make An Admin</span>
                        </li></Link>
                    <li className='dashboard-li'>
                        <NotificationsNoneIcon className='icon'/>
                        <span>Notificafion</span>
                        </li>
                        <p className="title">Services</p>
                    <Link to={`/dashboard/addticketbooking`}>
                    <li className='dashboard-li'>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <span>Ticket-Booking</span>
                    </li>
                    </Link>
                    <Link to={`/dashboard/addEventRegister`}>
                    <li className='dashboard-li'>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <span>Event-Register</span>
                    </li>
                    </Link>


                    <Link to={`/dashboard/loadProdect`}>
                    <li className='dashboard-li'>
                        <SettingsSystemDaydreamIcon className='icon'/>
                        <span>Your Shop</span>
                    </li>
                    </Link>
                    <p className="title">User</p>
                    <li className='dashboard-li'>
                        <AssignmentIndIcon className='icon' />
                        <span>Profile</span>
                        </li>
                    <li onClick={logOut} className='dashboard-li'>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                        </li>
                </ul>
            </div>
            <div className="buttom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
            </div>
            <div className='col-md-9 col-lg-9'>
                
                <div>
                <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;