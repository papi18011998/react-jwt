import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='side-menu'>
            <ul className='side-menu-ul'>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/admin/dashboard">Dashboard</Link></li>

                <details >
                    <summary>User</summary>
                    <li><Link to="/admin/user">Liste de utilisateurs</Link></li>
                    <li><Link to="/admin/user/add">Ajouter un utilisateur</Link></li>
                    <li><Link to="/admin/user/edit">Modifier un utilisateur</Link></li>
                </details>

                <details >
                    <summary>Cocktail</summary>
                    <li><Link to="/admin/cocktail">Liste des cocktails</Link></li>
                    <li><Link to="/admin/cocktail/add">Ajouter un cocktail</Link></li>
                    <li><Link to="/admin/cocktail/edit">Modifier un cocktail</Link></li>
                </details>

            </ul>
        </div>
    );
};

export default SideMenu;