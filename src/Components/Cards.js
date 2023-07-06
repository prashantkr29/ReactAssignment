import React, { useState } from 'react';
import "./Cardstyle.css"
import Message from './Message';

function cards({type}) {
      
    // const [buttonpop,setbuttonpop] = useState('false');
    // const handleClick = ()=>{
    //     setbuttonpop('true');
    // }
    /*
    const [message,setmessage] = useState('Jokes');
    fetch('https://api.chucknorris.io/jokes/random?category={type}')
    .then(response=>response.data)
    .then(data=>{
        setmessage(data);
    }).catch(err=>{
        console.log(err);
    }
    */ 
    
    return (
        <>
                    <div className="card">
                        <h5 className="card-title" style={{"color":'Black'}}>{type}</h5>
                        <p className="card-text">Ultimate Jokes on {type}.</p>
                        <button type="button" class="btn btn-primary">click</button>
                         {/* <Message trigger={buttonpop}>
                            <p>{message}</p>
                         </Message>
                         trigger the message component using use state hooks  
                         */}
                    </div>
        </>
    )
}

export default cards