import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
const LogIn = () => {
  return (
    <div className='log-in'>
      <div className="log-in-content">
        <h1>Welcome!</h1>
        <div className="username"><AiOutlineUser />   <input type="text" placeholder='Username' /></div>
        <div className="password"><RiLockPasswordLine />  <input type="password" placeholder='Password' /></div>
        <button className='log-in-button'>Log in</button>
        <div className="img-flow"><img src="https://static.wixstatic.com/media/9c608a_2d8a73a50d1a430ebc25c35924dc21b4.png/v1/fill/w_129,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_2d8a73a50d1a430ebc25c35924dc21b4.png" alt="" /></div>
      </div>
      <div className="img-flow">
        <img src="https://static.wixstatic.com/media/9c608a_2d8a73a50d1a430ebc25c35924dc21b4.png/v1/fill/w_129,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9c608a_2d8a73a50d1a430ebc25c35924dc21b4.png" alt="" />
        <img src="https://i.pinimg.com/736x/f5/c9/76/f5c976c5ba635c311477fc88ce3ef997.jpg" alt="" />
      </div>
    </div>
  )
}

export default LogIn