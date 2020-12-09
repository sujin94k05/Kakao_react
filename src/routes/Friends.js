import React from 'react';
import { Link } from 'react-router-dom';
import FriendsList from '../components/FriendsList';
import profiles from '../data/FriendsList.json';
import Nav from './Nav';
import './Friends.css';

export default function Friends(){
    const myfriends = profiles[0];
    return (
    <>
    <header>
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
                <span class="header_txt"></span>
            </div>
            <div class="header_center">
                <span>More</span>
            </div>
            <div class="header_right">
                <i class="fa fa-cog fa-lg"></i>
            </div>
        </div>
    </header>
    <main>
        <div class="srch">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Find friends, chats, plus Friends" />
        </div>
        <section>
            <div class="section_header">
                <h3>My profile</h3>
            </div>
            <Link to="/Profile">
            <FriendsList
                id = {myfriends.id}
                name = {myfriends.name}
                img = {myfriends.profileimg}
                text = {myfriends.profilemsg}
                email = {myfriends.email}
            />
            </Link>
        </section>
        <section>
            <div class="section_header">
                <h3>Friends</h3>
            </div>
            {profiles.map(myfriends => {
                if(myfriends.id != 1) {return(
                <FriendsList
                    id = {myfriends.id}
                    name = {myfriends.name}
                    img = {myfriends.profileimg}
                    text = {myfriends.profilemsg}
                    email = {myfriends.email}
                />
                )}})}
        </section>
    </main>
    <Nav />
    </>
    );
}