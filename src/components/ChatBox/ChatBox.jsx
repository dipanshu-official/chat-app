// import React from 'react'
// import './ChatBox.css'
// import assets from '../../assests/assets'

// const ChatBox = () => {
//   return (
//     <div className='chat-box'>
//         <div className="chat-user">
//             <img src={assets.profile_img} alt="" />
//             <p>Richard Sanford <img className='dot' src={assets.green_dot} alt="" /></p>
//             <img src={assets.help_icon} className='help' alt="" />
//         </div>


//         <div className="chat-msg">
//           <div className="s-msg">
//             <p className="msg">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque ab repellendus ..
//             </p>
//             <div>
//               <img src={assets.profile_img} alt="" />
//               <p>2:30 PM</p>
//             </div>
//           </div>
//           <div className="s-msg">
//             <p className="msg"/>
//               <img src={assets.pic1} alt="" />
//             </div>
//           <div className="r-msg">
//             <p className="msg">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque ab repellendus ..
//             </p>
//             <div>
//               <img src={assets.profile_img} alt="" />
//               <p>2:30 PM</p>
//             </div>
//           </div>
//         </div>





//         <div className="chat-input">
//           <input type="text" placeholder='send a message' />
//           <input type="file" id='image' accept='image/png , image/jpeg ' hidden />
//           <label htmlFor="image">
//             <img src={assets.gallery_icon} alt="" />
//           </label>
//           <img src={assets.send_button} alt="" />
//         </div>

//     </div>
//   )
// }

// export default ChatBox
import React, { useState } from 'react';
import './ChatBox.css';
import assets from '../../assests/assets';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleSendMessage = () => {
    // Logic to send the message
    console.log('Message sent:', message);
    setMessage(''); // Clear input after sending
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      console.log('Image selected:', file);
    }
  };

  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="Profile" />
        <p>Richard Sanford <img className='dot' src={assets.green_dot} alt="Online" /></p>
        <img src={assets.help_icon} className='help' alt="Help" />
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque ab repellendus ..
          </p>
          <div>
            <img src={assets.profile_img} alt="Profile" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="s-msg">
         <img className='msg-img'  src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="Profile" />
            <p>2:30 PM</p>
          </div>
        </div>
       
        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut eaque ab repellendus ..
          </p>
          <div>
            <img src={assets.profile_img} alt="Profile" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input 
          type="text" 
          placeholder='Send a message' 
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
        />
        <input 
          type="file" 
          id='image' 
          accept='image/png, image/jpeg' 
          hidden 
          onChange={handleImageChange}
        />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="Gallery" />
        </label>
        <img 
          src={assets.send_button} 
          alt="Send" 
          onClick={handleSendMessage} 
          style={{ cursor: 'pointer' }} 
        />
      </div>
    </div>
  );
}

export default ChatBox;
