import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shop-context'
import { SlBasket } from 'react-icons/sl'
const Navbar = () => {
  const { cartItemsCount } = useContext(ShopContext)
  return (
    <div className='navbar-content-shadow'>
      <div className="navbar-shadow"></div>
      <div className="navbar-section container">
        <div className="navbar-content">
          <a>Sophia</a>
          <span>Natural & Organic Beauty Care</span>
        </div>
        <div className="navbar-list">
          <ul>
            <FontAwesomeIcon icon="fas fa-bars"  className='bar-icon'/>
            <Link to='/' className='const'> Home</Link>
            <Link to='/hair'>Hair and skin</Link>
            <Link to='/frag'>Fragrances</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'><FontAwesomeIcon icon={faUser} /> <span>Log in</span></Link>
            <Link to='./cart'>
              <div><SlBasket className='basket' />
              <div className="items-count"> <span> {cartItemsCount}</span></div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar