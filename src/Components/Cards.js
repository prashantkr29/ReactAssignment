import React, { useState } from 'react';
import "./Cardstyle.css"
import Message from './Message';

function cards({type}) {
    // const [showbutton,setshowbutton] = useState(false);
    // const handleClick = () =>{
    //     setshowbutton(true);
    // }   
    return (
        <>
            <div className="my-3">
                    <div className="card">
                        <h5 className="card-title" style={{"color":'blue'}}>{type}</h5>
                        <p className="card-text">Ultimate Jokes on {type}.</p>
                        <button type="button" class="btn btn-primary">click</button>
                        {/* { <Message content={type}/>} */}
                    </div>
            </div>
        </>
    )
}

export default cards