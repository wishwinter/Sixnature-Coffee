import { Link, NavLink, useLocation } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from './Navbar';



const Header = () => {
    const { pathname } = useLocation();
    
  
  return (
    <>
          <header className="header">
              <div className="container max-1280 flex-d">
                  <nav className="nav-menu">
                      <div className="menu-left">
                          <li><NavLink reloadDocument end to="/" style={({ isActive }) => isActive ? { color:'#eec22d' } : {}} >Home</NavLink></li>
                          <li className="menu-dropdown">
                              <a href='#' className={(pathname === '/Corporate/About' || pathname === '/Corporate/Contact-us')  ? 'doevent' : ''} >Corporate
                                  <img className="arrow h-100 w-100" src={require('../images/Path 21809.png')} alt="" />
                              </a>
                              <ul className="option">
                                  <a href="#" />
                                  <li><NavLink  reloadDocument end to="/Corporate/About"  style={({ isActive }) => isActive ? { color: '#eec22d' } : {}}  >About us</NavLink></li>
                                  <li><NavLink  reloadDocument  end to="/Corporate/Contact-us" style={({ isActive }) => isActive ? { color: '#eec22d' } : {}} >Contact us</NavLink></li>
                              </ul>
                          </li>
                          <li className="menu-dropdown">
                              <a href="#" className={(pathname === '/Products/Equipment' || pathname === '/Products/Ingredients' || pathname === `/Products/Equipment/DetailProduct/${1}`) ? 'doevent' : ''}>Products
                                  <img className="arrow h-100 w-100" src={require('../images/Path 21809.png')} alt="" />
                              </a>
                              <ul className="option">
                                  <a href="#" />
                                  <li><NavLink reloadDocument end to="/Products/Equipment" style={({ isActive }) => isActive ? { color: '#eec22d' } : {}}  >Equipment</NavLink></li>
                                  <li><NavLink reloadDocument end to="/Products/Ingredients" style={({ isActive }) => isActive ? { color: '#eec22d' } : {}}  >Ingredients</NavLink></li>
                              </ul>
                          </li>
                          <li className="menu-dropdown">
                              <a href="#" className={(pathname === '/Our_services/Academy' || pathname === '/Our_services/Cafe' || pathname === '/Our_services/Fixing_service') ? 'doevent' : ''}>Our services
                                  <img className="arrow h-100 w-100" src={require('../images/Path 21809.png')} alt="" />
                              </a>
                              <ul className="option">
                                  <a href="#" />
                                  <li><NavLink reloadDocument end to="/Our_services/Academy">Academy</NavLink></li>
                                  <li><NavLink reloadDocument end to="/Our_services/Cafe">Cafe</NavLink></li>
                                  <li><NavLink reloadDocument end to="/Our_services/Fixing_service">Fixing service</NavLink></li>
                              </ul>
                          </li>
                          <li><NavLink reloadDocument end to="/Articles" style={({ isActive }) => isActive ? { color: '#eec22d' } : {}}  >Articles</NavLink></li>
                      </div>
                      <div className="logo">
                          <a href="/"><img className="img-logo h-100 w-100" src={require('../images/Group 14083.png')} alt="" /></a>
                      </div>
                      <div className="menu-right">
                          <li><NavLink reloadDocument to="/Roasting_Factory" style={({ isActive }) => isActive ? { color: '#eec22d' } : {}}>Roasting Factory</NavLink></li>
                          <li><NavLink reloadDocument to="/Farm_Fresh_food" style={({ isActive }) => isActive ? { color: '#eec22d' } : {}}>Farm &amp; Fresh food</NavLink></li>
                          <div className="icon-nav">
                              <a href="https://www.facebook.com/SignatureRoasterSupply/" target="_blank"><img src={require('../images/icon_FB.png')} alt="" /></a>
                              <a href="#"><img src={require('../images/icon_WA.png')} alt="" /></a>
                              <a href="#"><img src={require('../images/icon_Line.png')} alt="" /></a>
                              <a href="#"><img src={require('../images/icon_IG.png')} alt="" /></a>
                              <a href="#"><img src={require('../images/icon_TK.png')} alt="" /></a>
                          </div>
                      </div>
                  </nav>
                  <div className='nav-b'><Navbar /></div>
                  
              </div>
          </header>

    </>
  )
}

export default Header