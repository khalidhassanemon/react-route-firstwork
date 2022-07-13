import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friend,setFriend]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        
         fetch(url) 
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[])
    return (
        <div>
            <h3>This is Friends_Detail Component:{friendId}</h3>
            <h2>Name:{friend.name}</h2>
            <p>Email:{friend.email}</p>
            <p>Phone:{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;