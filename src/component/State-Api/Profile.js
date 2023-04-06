import React from 'react'
import "./Profile.css";

function Profile() {
  return (
    <div class="card">
        <div style={{width:"50%"}}>
            <img src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg" width="100%" height="100%" alt="Profile image"/>
        </div>

        <div style={{padding:"5px"}} >
            <dl>
                <dt><b>User</b></dt>
                <dd> Kabir</dd>
            </dl>

            <dl>
                <dt><b>City</b></dt>
                <dd> Delhi</dd>
            </dl>

            <dl>
                <dt><b>Gender</b></dt>
                <dd>Male</dd>
            </dl>
            <dl>
                <dt><b>Description</b></dt>
                <dd></dd>
            </dl>
        </div>
    </div>
  )
}

export default Profile