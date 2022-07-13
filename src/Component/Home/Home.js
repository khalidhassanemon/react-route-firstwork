import React, { useEffect, useState } from 'react';
import Friend from '../Friend/friend';

const Home = () => {

    const [friends,setFriends]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])

    return (
        <div>
           <h1>Friends: {friends.length}</h1>
            {
                friends.map(fd=> <Friend friends={fd}></Friend>)
            }
        </div>
    );
};

export default Home;