import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
  
    return (
        <>
          <nav class="main-nav">
            <ul>
              <li><NavLink exact to="/">Gallery</NavLink></li>
              <li><NavLink to='/Cats'>Cats</NavLink></li>
              <li><NavLink to='/Dogs'>Dogs</NavLink></li>
              <li><NavLink to='/Birds'>Birds</NavLink></li>
            </ul>
         </nav>
        </>
    )
}

export default Navbar;
