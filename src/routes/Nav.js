import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav(){
    return(
    <nav>
        <NavLink to="/" exact={true} activeClassName="click">
            <i class="fa fa-user"></i>
            <span>Friends</span>
        </NavLink>
        <NavLink to="/Chats" activeClassName="click">
            <i class="fa fa-comment"></i>
            <span>Chats</span>
        </NavLink>
        <NavLink to="/Find" activeClassName="click">
            <i class="fa fa-search"></i>
            <span>Find</span>
        </NavLink>
        <NavLink to="/More" activeClassName="click">
            <i class="fa fa-ellipsis-h"></i>
            <span>More</span>
        </NavLink>
    </nav>
    );
}