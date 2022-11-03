import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const About = () => {
  return (
    <>
      {/* <h1 style={{ marginTop: "100px" }}>About US</h1> */}
      <div className='Content-about bg-img' >
        <div className='hero-about'>
          <img src='https://sixnaturecoffee.com/images/about-blur.png'></img>
        </div>
        <div className='breadcrumb max-1280'>
          <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
          <li className='breadcrumb-item'><a href='#'>Corporate</a></li>
          <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>About</a></li>
        </div>
        <div className='Detail-about max-1280'>
          <div className='container-about-left'>
            <div className='about-img-left'>
              <img src={require('../images/Mask Group 180.png')}></img>
            </div>
            <div className='Text-about' >
              <h1 style={{ fontSize: "52px", fontWeight: "lighter" }}>Poramet Phimkhot</h1>
              <p style={{ fontSize: "20px" }}>
                "I like to drink coffee I grew up growing coffee.
                Coffee is part of my life."
              </p>
              <p style={{ fontSize: "18px", fontWeight: "lighter", color: "#707070", lineHeight: "28px" }}>
                We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times We have an organic coffee plantation ready
                to produce high quality coffee beans. standardized manufacturing plant Make our coffee products have a unique identity that is liked by coffee lovers.
              </p>
            </div>
          </div>
          <div className='container-about-right'>
              <div className='about-img-right' >
              <img src="https://sixnaturecoffee.com/images/about-2.JPG"></img>
            </div>
            <div className='Text-about'>

              <p style={{ fontSize: "18px", fontWeight: "lighter", color: "#707070", lineHeight: "28px" }}>
                We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times We have an organic coffee plantation ready
                to produce high quality coffee beans. standardized manufacturing plant Make our coffee products have a unique identity that is liked by coffee lovers.
              </p>
              <p style={{ fontSize: "18px", fontWeight: "lighter", color: "#707070", lineHeight: "28px" }}>
                We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times.
              </p>

            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default About