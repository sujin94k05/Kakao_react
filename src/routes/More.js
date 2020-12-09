import React from 'react';
import profiles from '../data/FriendsList.json';
import Nav from './Nav';
import './More.css';

export default function More(){
    const myfriends = profiles[0];
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
            <section class="my_profile">
                <img src={myfriends.profileimg} alt="" />
                <div class="profile_con">
                    <h3 class="name">{myfriends.name}</h3>
                    <span class="email">{myfriends.email}</span>
                </div>
                <i class="fa fa-comment-o fa-2x"></i>
            </section>
            <section class="option">
                <div class="more_menu">
                    <i class="fa fa-smile-o fa-2x"></i>
                    <span>Emoticons</span>
                </div>
                <div class="more_menu">
                    <i class="fa fa-paint-brush fa-2x"></i>
                    <span>Themes</span>
                </div>
                <div class="more_menu">
                    <i class="fa fa-hand-peace-o fa-2x"></i>
                    <span>Plus Friend</span>
                </div>
                <div class="more_menu">
                    <i class="fa fa-user-circle-o fa-2x"></i>
                    <span>Emoticons</span>
                </div>
            </section>
            <section class="plus_friends">
            <div class="plus_header">
                <h2>Plus Friends</h2>
                <span>
                    <i class="fa fa-info-circle"></i>
                Learn More
                </span>
            </div>
            <div class="plus_con">
                <div class="plus_con_item">
                    <i class="fa fa-cutlery"></i>
                    <span>Order</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-home"></i>
                    <span>Store</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-television"></i>
                    <span>TV Channel/Radio</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-pencil"></i>
                    <span>Creation</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-graduation-cap"></i>
                    <span>Education</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-university"></i>
                    <span>Politics/Society</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-krw"></i>
                    <span>Finance</span>
                </div>
                <div class="plus_con_item">
                    <i class="fa fa-video-camera"></i>
                    <span>Movies/Music</span>
                </div>
            </div>
        </section>
        <section class="more_menu">
            <div class="more_menu_item">
                <img src="images/kakaoStory.png" alt="kakaoStory" />
                <span>Kakao Story</span>
            </div>
            <div class="more_menu_item">
                <img src="images/path.png" alt="" />
                <span>Kakao Story</span>
            </div>
            <div class="more_menu_item">
                <img src="images/kakaoFriends.png" alt="" />
                <span>Kakao Friends</span>
            </div>
        </section>
    </main>
    <Nav />
    </>
    );
}