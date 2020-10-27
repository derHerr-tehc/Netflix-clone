import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 100) {
             handleShow(true)
         } else handleShow(false);
      });
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
               className='nav__logo'
                src="https://lh3.googleusercontent.com/proxy/V3yuQOFyXiqqrn0ZE6dhI91ZB-33IuDVWiXVobrK4F0PxFtlMK3pgVGEwNfin87gRdkF5wrAmeJ6ZZIHp4F2ufdvO6Ollug_HA4xqwdvd91sDsqSe00"
                alt="Netflix Logo" />  

            <img 
               className="nav__avatar"
                src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3.png"   
                alt="" /> 
        </div>
    )
}

export default Nav
