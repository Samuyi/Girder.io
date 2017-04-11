// @flow

import React from 'react';
import $ from 'jquery';
import { APP_NAME } from '../config';

import { NavLink, Link } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
} from '../routes';

const handleNavLinkClick = () => {
  $('body').scrollTop(0);
  $('.js-navbar-collaspe').collaspe('hide');
}

const Nav = () =>
<nav className='navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse'>
  <button className='navbar-toggler navbar-toggler-right' type='button' role='button' data-toggle='collapse' data-target='.js-navbar-collaspe'>
    <span className='navbar-toggler-icon'/>
  </button>
  <Link to={HOME_PAGE_ROUTE} className='navbar-brand'>{APP_NAME}</Link>
  <div className='js-navbar-collaspe collapse navbar-collapse'>
   <ul className='navbar-nav mr-auto'>
     {[
      { route: HOME_PAGE_ROUTE, label: 'Home' },
      { route: HELLO_PAGE_ROUTE, label: 'say Hello' },
      { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
      { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo'},
     ].map(link => (
      <li key={link.route}>
        <NavLink to={link.route} className='nav-link' activeStyle={{ color: 'white' }} onClick= { handleNavLinkClick } exact>{link.label}</NavLink>
      </li>
    ))}
  </ul>
 </div>
</nav>


export default Nav;
