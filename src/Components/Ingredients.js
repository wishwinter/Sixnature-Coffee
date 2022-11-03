import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import DataIngredients from './DataIngredients'


const Ingredients = () => {
  return (
    <>
          <div className='Content-about bg-img' >
              <div className='hero-about'>
                  <img src='https://sixnaturecoffee.com/images/bg-ingredient.png'></img>
              </div>
              <div className='breadcrumb max-1280'>
                  <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
                  <li className='breadcrumb-item'><a href='#'>Products</a></li>
                  <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Ingredients</a></li>
              </div>
              <p className='ptitle max-1280' >
                  We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the
                  company's products quickly through various platforms in modern times.</p>


              <div className='Card-product max-1280'>
                  {/* <Product data={ProductData}/> */}
                  {DataIngredients.map((value) => (
                      <div className='Card-box' key={value.id} >
                            <div className='box-new'><p>NEW</p></div>
                          <div className='pro-img'>

                          <img src={value.image} />

                          </div>
                          <p style={{ fontSize: "20px" }}>{value.Name}</p>
                          <p>{value.Price}</p>

                          <NavLink end to={`/Products/Ingredients/DetailIngredients/${value.id}`}>Read more</NavLink>
                      </div>
                  ))}

              </div>
          </div>
    </>
  )
}

export default Ingredients