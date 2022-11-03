import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import './Navbar.css'
const Navbar = () => {
    const [sidebar,setSidebar] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActivee, setIsActivee] = useState(false);
    const [isActiveee, setIsActiveee] = useState(false);
    const showsidebar = () => setSidebar(!sidebar);
    const handleClick = () => {
        setIsActive(current => !current);
    };
    const handleClickk = () => {
        setIsActivee(current => !current);
    };
 const handleClickkk = () => {
        setIsActiveee(current => !current);
    };

    

  return (
    <>
        <div className='Navbar'>
            <Link to="#" className='menu-bars' onClick={showsidebar}>
                 
                      <FaIcons.FaBars className='nav-menu-toggle' style={(sidebar ? {opacity:"0" } : "")} />
                     
                 
                  
            </Link>
              
              <AiIcons.AiOutlineClose onClick={showsidebar} style={(!sidebar ? {opacity:"0"} : "")} className='close' />
 
              
        </div>
          <nav className={sidebar ? 'Nav-menu active' : 'Nav-menu'}>
             <li  onClick={showsidebar}>
                      <Link reloadDocument to="/">
                    <span>Home</span>
                </Link>
            </li>
                
          
               <div className='nav-menudropdown'>
               <div className='nav-item'>
                <li className='flex-nav'>
                      <RiIcons.RiAddLine className='btn-add' onClick={handleClick} />
                      <Link reloadDocument to="#">
                          <span>Corporate</span>
                      </Link>
                  </li>
                  <div className='nav-menudropdow-item' style={{
                      display: isActive ? 'block' : '',
                      
                  }}>
                    <li>
                          <Link reloadDocument to="/Corporate/About">About</Link>
                    </li>
                      <li>
                          <Link reloadDocument to='/Corporate/Contact-us' >Contact us</Link>
                      </li>
                  </div>
               </div>
                  <div className='nav-item'>
                      <li className='flex-nav'>
                          <RiIcons.RiAddLine className='btn-add' onClick={handleClickk} />
                          <Link reloadDocument to="#">
                              <span>Products</span>
                          </Link>
                      </li>
                      <div className='nav-menudropdow-item' style={{
                          display: isActivee ? 'block' : '',

                      }}>
                          <li>
                              <Link reloadDocument to="/Products/Equipment">Equipment</Link>
                          </li>
                          <li>
                              <Link reloadDocument to='/Products/Ingredients' >Ingredients</Link>
                          </li>
                      </div>
                  </div>
                  <div className='nav-item'>
                      <li className='flex-nav'>
                          <RiIcons.RiAddLine className='btn-add' onClick={handleClickkk} />
                          <Link reloadDocument to="#">
                              <span>Our Services</span>
                          </Link>
                      </li>
                      <div className='nav-menudropdow-item' style={{
                          display: isActiveee ? 'block' : '',
                      }}>
                          <li>
                              <Link reloadDocument to="/Our_services/Academy">Academy</Link>
                          </li>
                          <li>
                              <Link reloadDocument to='/Our_services/Cafe' >Cafe</Link>
                          </li>
                          <li>
                              <Link reloadDocument to='/Our_services/Fixing_service' >Fixing service</Link>
                          </li>
                      </div>
                  </div>
                  <li>
                      <Link reloadDocument to='/Articles' >Articles</Link>
                  </li>
                  <li>
                      <Link reloadDocument to='/Roasting_Factory' >Roasting Factory</Link>
                  </li>
                  <li>
                      <Link reloadDocument to='/Farm_Fresh_food' >Farm & Fresh food</Link>
                  </li>
               
              
               
                 
                  </div>
                  

        </nav>






    </>
  )
}

export default Navbar