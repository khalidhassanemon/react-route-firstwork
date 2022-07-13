import React from 'react';
import { Link } from 'react-router-dom';
const friend = (props) => {
    const{name,email,id}=props.friends;
    
    const friendStyle={
        border:'1px solid',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>
               <button>Show Detail of {id}</button>
            </Link>
        </div>
    );
};

export default friend;