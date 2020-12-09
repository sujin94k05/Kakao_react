import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile(props){
    const { location, history } = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const { id, name, email, img, bg } = location.state;
    return(
        <>
        <header className="Profile_Header">
            <div class="header_top">
                <div class="header_left">
                    <i class="fa fa-plane"></i>
                    <i class="fa fa-wifi"></i>
                </div>
                <div class="header_center">
                    <span class="time">13:29</span>
                </div>
                <div class="header_right">
                    <i class="fa fa-moon-o"></i>
                    <i class="fa fa-bluetooth-b"></i>
                    <span>100%</span>
                    <i class="fa fa-battery-full"></i>
                </div>
            </div>
            <div class="header_bottom">
                <div class="header_left">
                    <Link to="/" exact={true}>
                        <i class="fa fa-times fa-lg"></i>
                    </Link>
                </div>
                <div class="header_center">
                </div>
                <div class="header_right">
                    <i class="fa fa-user fa-lg"></i>
                </div>
            </div>
        </header>
        <main>
            <div class="main_header">
                <div class="pic">
                    <img src={img} />
                    <h3 class="name">{name}</h3>
                    <p>{email}</p>
                </div>
            </div>
        <div class="main_con">
            <div class="main_con_actions">
                <div class="actions">
                    <span class="circle">
                        <i class="fa fa-comment fa-lg"></i>
                    </span>
                    <span class="actions_title">My Chatroom</span>
                </div>
                <div class="actions">
                    <span class="circle">
                        <i class="fa fa-pencil fa-lg"></i>
                    </span>
                    <span class="actions_title">Edit Profile</span>
                </div>
            </div>
        </div>
</main>
</>
    );
}else return null;
}