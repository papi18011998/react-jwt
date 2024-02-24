import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/admin/Header';
import SideMenu from '../../components/admin/SideMenu';
import './admin.css'

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            <Header/>
            <div id="admin">
                <SideMenu/>
                <div className='admin_body'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;