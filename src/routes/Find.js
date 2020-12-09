import React from 'react';
import Nav from './Nav';
import './Find.css';

export default function Find(){
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
                    <span class="header_txt">Find</span>
                </div>
                <div class="header_center">
                    <span>Find</span>
                </div>
                <div class="header_right">
                </div>
            </div>
        </header>
        <main>
            <section class="find_menu_wrap">
                <div class="find_menu">
                    <i class="fa fa-address-book fa-lg"></i>
                    <span>Fine</span>
                </div>
                <div class="find_menu">
                    <i class="fa fa-qrcode fa-lg"></i>
                    <span>QR Code</span>
                </div>
                <div class="find_menu">
                    <i class="fa fa-mobile fa-lg"></i>
                    <span>Shake</span>
                </div>
                <div class="find_menu">
                    <i class="fa fa-envelope-o fa-lg"></i>
                    <span>Invite via SMS</span>
                </div>
            </section>
            <section class="recom">
                <h3>Recommended Friends</h3>
                <span>You have no recommended friends.</span>
            </section>
        </main>
        <Nav />
    </>
    );
}