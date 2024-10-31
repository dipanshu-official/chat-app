import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assests/assets'

const ProfileUpdate = () => {

  const [image,setImage] = useState(false)


  return (
    <div className='profile'>
      <div className="profile-containor">
        <form >
          <h2>Profile Details</h2>
          <label >
            <input onChange={(e)=>setImage(e.target.files[0])}  type="file" id='avtar' accept='.png, .jpg, .jpeg ' hidden />
            <img src={image? URL.createObjectURL(image) :  assets.avatar_icon}  alt="" />
            Upload profile image
          </label>
          <input type="text " placeholder='Your name' required />
          <textarea  placeholder='Write profile bio' required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className='profile-pic' src={image? URL.createObjectURL(image) :  assets.logo_icon} alt="" />
      </div>
        
        Upload profile image
    </div>
  )
}

export default ProfileUpdate