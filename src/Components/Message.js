import React, { useState } from 'react';
import './Messagestyle.css'; 

const MessageBox = ({content}) => {
  const [message, setMessage] = useState();
  const [showMessageBox, setShowMessageBox] = useState(true);


  const url = `https://api.chucknorris.io/jokes/random?category=${content}`;
  fetch(url)
  .then(response=>response.data)
  .then(data=>{
    setMessage(data);
    console.log(message);
  }).catch(err=>{
    console.log(err);
  })

  

  const handleClick = () => {
    setMessage(message);
  };

  const handleClose = () => {
    setShowMessageBox(false);
  };

  return (
    <>
      {showMessageBox && (
        <div className="message-box-overlay">
          <div className="message-box">
            <p>{message}</p>
            <button onClick={handleClick}>Change Message</button>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageBox;
