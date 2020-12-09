import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

export default function Chat(props){
    const { location, history } = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const { img, name } = location.state;
    
    return(
        <>
        <header className="chat_Header">
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
                    <Link to="/Chats"><i class="fa fa-chevron-left fa-lg"></i></Link>
                </div>
                <div class="header_center">
                    <span>Friend Name</span>
                </div>
                <div class="header_right">
                    <i class="fa fa-search"></i>
                    <i class="fa fa-bars"></i>
                </div>
            </div>
        </header>
        <main className="chat_main">
            <span class="date">Thursday, November 12, 2020</span>
            <div class="message message_for_con">
                <span class="message_time">09:57</span>
                <div class="message_for">
                    <span>Hello!</span>
                    <span>Hello! This is a text message.<br />Hello!</span>
                    <span>This is a text message.</span>
                </div>
            </div>
            <div class="message message_to_con">
                <img src={img} alt="" />
                <div class="to_message message_to">
                    <p>{name}</p>
                    <span>And this is an answer.</span>
                    <span>And this is an answer. And this is an answer.<br />Hello!</span>
                    <span>And this is an answer.</span>
                </div>
                <span class="to_time message_time">11:21</span>
            </div>
            <div class="message_input">
                <i class="fa fa-plus fa-lg"></i>
                <div class="message_text">
                    <input type="text" />
                    <i class="fa fa-smile-o fa-lg"></i>
                    <span><i class="fa fa-microphone fa-lg"></i></span>
                </div>
            </div>
        </main>
        </>
    );
}else return null;
}