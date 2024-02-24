import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import NotFound from '../../utils/NotFound';

const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Login/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    );
};

export default AuthRouter;