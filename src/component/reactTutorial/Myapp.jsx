import React, { useState } from 'react'

function Myapp() {
    const [state,setState] = useState(0);

    function handleClick(){
        setState(state+1);
    }

    const user = {
        name: "Hedy Lamarr",
        imageurl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90,
    }

    const products =[
        {title:'Cabbage',isFruit: false, id:1},
        {title:'Garlic',isFruit:false,id:2},
        {title:'Apple',isFruit:true,id:3}
    ]
    return (
        <div>
            <div>
                <button onClick={handleClick}>
                   click {state} times
                </button>
                <button onClick={handleClick}>
                   click {state} times
                </button>
            </div>
            <br></br>


            <div>
                <h1>{user.name}</h1>

                <img 
                className="avatar"
                src={user.imageurl}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}

                />

            </div>

            <>
            {/* const listItems = products.map(product =>
    <li
      key={products.id}
      style={{
        color: products.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {products.title}
    </li>
    <ui></ui> */}
  {/* ); */}
 


        
            </>


            
        


        </div>

    )
}

export default Myapp