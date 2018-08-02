import React from 'react';

import { Link } from "react-router-dom";

const HeaderLoggedOut = () => (
  <ul>
    <li> <Link to="/"> Home </Link> </li>
    <li><Link to='/createAccount'>Create Account</Link></li>
  </ul>
)
export default HeaderLoggedOut;
