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
    const [styles,setStyles]=useState({
        bgColor:"white",
        color:"black",
        text:"check to switch dark mode"
    });

    const getRandomUser= () => {
        fetch("https://randomuser.me/api/?results=1")
        .then((res)=>res.json())
        .then((userData) =>{
            console.log(userData);
            setState({
                name:userData.results[0].name.first,
                City:userData.results[0].location.city,
                Gender:userData.results[0].gender,
                Image:userData.results[0].picture.large,
            });
        })
        
    }

    
    const ChangeStyle=(event)=>{
        if(event.target.checked){
            setStyles({
                bgColor:"black",
                color:"white",
                text:"Uncheck to switch light mode"
            })
        }
        else{
            setStyles({
                bgColor:"white",
        color:"black",
        text:"check to switch dark mode"
            })
            
        }
    }

  return (
    <div className="profile" 
    style={{backgroundColor:styles.bgColor,color:styles.color}}>
        <div style={{width:"40%"}}> 
            <img src={state.Image} width="100%" height="100%"  alt="Profile Image"/>

        </div>

        <div style={{width:"50%" ,textAlign:"left",padding:"10px"}}>
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
        <br></br>
        <input type="checkbox" style={{marginTop:"14px"}} onChange={ChangeStyle}/>
 {styles.text}
        </div>
    </div>
  )
}

export default Profile