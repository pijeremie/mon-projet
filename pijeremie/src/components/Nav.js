import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Nav = () => {
    return (
        <div className="nav">
            <ul> 
                <NavLink id="me-contacter-nav" exact to='/me-contacter' activeClassName="nav-active">
                    <li>Me contacter</li>
                </NavLink> 
                <NavLink id="accueil-nav" exact to='/' activeClassName="nav-active">
                    <li>p¡ jeremie!</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;