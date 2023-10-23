import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebookF, FaPinterestP } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='contact-page'>
      <div className="contact-content">
        <h1>- Contact us -</h1>
        <p>For general information or inquiries concerning your order please contact us at:
          <br /> E : info@mysite.com  T : 123-456-7890
        </p>

        <div className="icons">
          <BsTwitter />
          <FaFacebookF />
          <FaPinterestP />
        </div>
        <form>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Phone' />
          <textarea name="" id="" cols="30" rows="8" placeholder='Type your message here'></textarea>
        </form>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Contact