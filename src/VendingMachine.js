import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar=()=>{
return (
<nav>
    <span ><NavLink to="/chips">Chips</NavLink></span>
    <span ><NavLink to="/coke">Coke</NavLink></span>
    <span ><NavLink to="/snickers">Snickers</NavLink></span>
</nav>
);
}
export default NavBar;