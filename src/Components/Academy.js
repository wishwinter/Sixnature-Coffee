import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import DataAcademy from './DataAcademy';
import { v4 as uuidv4 } from 'uuid';
const Academy = () => {
  return (
    <>
          <div className='Content-about bg-img' >
              <div className='hero-about'>
                  <img src='https://sixnaturecoffee.com/images/bg-academy.png'></img>
              </div>
              <div className='breadcrumb max-1280'>
                  <li className='breadcrumb-itemm'><NavLink end to="/" >Home</NavLink></li>
                  <li className='breadcrumb-item'><a href='#'>Our services</a></li>
                  <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Academy</a></li>
              </div>
        <div className='container-Academy max-1280'>

                {DataAcademy.map((value,index)=>(

                  <div className={`box-academy ${index % 2 === 0 ? 'left-right' : 'right-left'}`} key={index}>
                  <div className='img-acd'><img src={value.img1}/></div>
                    <div className='text-acd'>
                      <h1>{value.bigTitle}</h1>
                      {value.Text }
                      <NavLink className='detail-link' end to={`/Our_services/Academy/${value.id}`}>Read more</NavLink>
                    </div>
                   
                    

                  </div>




                ))}




              </div>
                
       



              </div>






    </>
  )
}

export default Academy