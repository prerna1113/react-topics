import React from 'react'
import "./Profile.css";

function Profile() {
  return (
    <div class="card">
        <div style={{width:"40%"}}>
            <img src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg" width="100%" height="100%" alt="Profile image"/>
            
        </div>

        <div style={{ width:"60%",padding:"10px", textAlign:"left"}} >
            <dl>
                <dt ><b>User</b></dt>
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
                <dd>
                    dlfkdfl dlfkldfka; dlkfdlfklja dlkfjdkfja; kldjf al;
                    
                </dd>
            </dl>
            <button>Profile</button>
        </div>
        
    </div>
  )
}

export default Profile