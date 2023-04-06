import React from 'react'
import './Profile.css';
import { useState } from 'react';

function Profile() {
    const [state,setState]=useState({
        name:"Chris",
        City:"London",
        Gender:"Male",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MI6FjdCs4QjREvY7BfcHGS29pDWVMrSD9A&usqp=CAU",
    })
    const getRandomUser= () => {
        fetch("https://randomuser.me/api/?results=1")
        .then((res)=>res.json())
        .then((userData) =>{
            console.log(userData);
            setState({
                name:userData.results[0].name.first,
                City:userData.results[0].location.city,
                Gender:userData.results[0].gender,
                Image:userData.results[0].picture.medium,
            });
        })
        
    }

  return (
    <div className="profile">
        <div style={{width:"35%"}}> 
            <img src={state.Image} width="100%" height="100%"  alt="Profile Image"/>

        </div>

        <div style={{width:"65%" ,textAlign:"left",padding:"10px"}}>
            <dl>
                <dt><b>User Name</b></dt>
                <dd>{state.name}</dd>
            </dl>

            <dl>
                <dt><b>City</b></dt>
                <dd>{state.City}</dd>
            </dl>

            <dl>
                <dt><b>Gender</b></dt>
                <dd>{state.Gender}</dd>
            </dl>

            <dl>
                <dt><b>Description</b></dt>
                <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia excepturi expedita fuga consectetur rem optio maxime fugit, nihil culpa atque temporibus! Consectetur enim, eos asperiores illo odio minus labore aperiam?</dd>
            </dl>
        <button onClick={getRandomUser}>Random User</button>
        </div>
    </div>
  )
}

export default Profile