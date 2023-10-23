import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-text">
          <h6>About Us</h6>
          <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          <span>© 2035 by Sophia. Powered and secured by Wix</span>
        </div>
        <div className="footer-icons">
          <h6>Follow Us</h6>
          <div className="icons">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faPinterestP} />
          </div>
        </div>
        <div className="footer-mailings">
          <h6>Join our mailing list</h6>
          <input type="text" placeholder='Enter your email here*' />
          <button>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default Footer