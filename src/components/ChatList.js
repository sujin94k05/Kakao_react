import React from 'react';
import { Link } from 'react-router-dom';

export default function ChatList({id, name, img, text}){
    return(
        <li>
            <Link to={({
            pathname : '/Chat',
            state : { id, img, name }
            })}>
                <img src={img} alt="" />
                <div class="chats_con">
                    <span class="name">{name}</span>
                    <span class="message">Hello! This a text message!</span>
                </div>
                <span class="chats_time">13:29</span>
            </Link>
        </li>
    );
}