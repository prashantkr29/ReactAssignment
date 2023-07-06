import React from 'react'
import "./Messagestyle.css"


function Message(props) {
  return (props.trigger)?(
    <div className="popup">
      <div className="pop-inner">
        <button className="close-btn">close</button>
        {props.children}
      </div>
    </div>
  ):"";
}

export default Message
