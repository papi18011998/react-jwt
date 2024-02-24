import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../utils/NotFound';
import { Contact, Home, Layout, Service } from "./index"
const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route 
                path='/'
                index
                element={<Home/>}
                />
                <Route 
                path='/home'
                element={<Home/>}
                />
                <Route 
                path='/service'
                element={<Service/>}
                />
                <Route 
                path='/contact'
                element={<Contact/>}
                />
                <Route 
                path='*'
                element={<NotFound/>}
                />
            </Route>
        </Routes>
    );
};

export default PublicRouter;