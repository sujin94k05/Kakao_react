import React, { useState, useEffect } from 'react';
import ChatList from '../components/ChatList';
import FriendsList from '../data/FriendsList.json';
import Nav from './Nav';
import './Chats.css';
import axios from 'axios';

export default function Chats(){
    const profile = FriendsList;
    const [chats, setchats] = useState([]);
    let getData = async () => {
        const { data : chats } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setchats(chats);
    }

    useEffect(getData,[]);
    return(
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
                    <span class="header_txt">Manage</span>
                </div>
                <div class="header_center">
                    <span>Chats</span>
                    <i class="fa fa-caret-down"></i>
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
            <ul class="chats">
                {chats.map((chat, idx) =>(
                    <ChatList 
                        id = {chat.id}
                        username = {chat.name}
                        name = {chat.name}
                        img = {profile[idx].profileimg}
                    />
                ))}
        </ul>
        <div class="chat-btn">
            <i class="fa fa-comment"></i>
        </div>
    </main>
    <Nav />
    </>
    );
}