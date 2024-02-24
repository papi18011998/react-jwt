import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLayout, Dashboard} from "./index"
import { User, UserAdd, UserEdit } from './User';
import { Cocktail, CocktailAdd, CocktailEdit} from './Cocktail';
import NotFound from '../../utils/NotFound';

const AdminRouter = () => {
    return (
        <Routes>
            <Route element={<AdminLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>

                <Route path='user'>
                    <Route path='' element={<User/>}/>
                    <Route path='edit/:uid' element={<UserEdit/>}/>
                    <Route path='add' element={<UserAdd/>}/>
                </Route>

                <Route path='cocktail'>
                    <Route path='' element={<Cocktail/>}/>
                    <Route path='edit' element={<CocktailEdit/>}/>
                    <Route path='add' element={<CocktailAdd/>}/>
                </Route>

                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default AdminRouter;