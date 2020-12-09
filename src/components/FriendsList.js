import React from 'react';
import { Link } from 'react-router-dom';

export default function FriendsList({id, name, email, img, text, bg}){
    return(
        <div class="profile">
            <img src={img} alt="" />
            <Link to={({
                pathname : '/Profile',
                state : { id, name, email, img, text, bg }
            })}>{name}</Link>
            <span>{text}</span>
        </div>
    );
}