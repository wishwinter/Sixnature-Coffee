
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useFetcher, useParams } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa';
import DataIngredients from './DataIngredients';
const DetailIngredients = () => {

    const [Ingredients, setIngredients] = useState([]);

    const { IngredientsId } = useParams();

    useEffect(() => {
        // getProducts();
        setIngredients(DataIngredients)
    }, []);
    const x = Ingredients.filter(Ingredients => Ingredients.id == IngredientsId).map(Ingredients => Ingredients.image)
    const y = Ingredients.filter(Ingredients => Ingredients.id == IngredientsId).map(Ingredients => Ingredients.Name)
    const z = Ingredients.filter(Ingredients => Ingredients.id == IngredientsId).map(Ingredients => Ingredients.Price)

  return (
    <>
          <div className='Content-about bg-img' >
              <div className='hero-about'>
                  <img src='https://sixnaturecoffee.com/images/bg-ingredient.png'></img>
              </div>
              <div className='breadcrumb max-1280'>
                  <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
                  <li className='breadcrumb-item'><a href='#'>Products</a></li>
                  <li className='breadcrumb-item' ><NavLink  reloadDocument end to="/Products/Ingredients">Ingredients</NavLink></li>
                  <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>{y}</a></li>
              </div>

              <div className='conatiner-product max-1280'>
                  <div style={{ width: "100%" }}>
                      <img style={{ width: "100%" }} src={x} />
                  </div>
                  <div className='right-deatail'>
                      <h1 >{y}</h1>
                      <h2>{z}</h2>
                      <p>We are a complete coffee business. With an effort with allocate products to create a system for the target group to access the company's products quickly through various plathforms in modern times we have an organic coffe plantation ready to produce high quality coffee beans. standardized manufacturing plan make our coffee products have a unique identity that is liked by coffee lovers</p>
                      <p>With an effort with allocate products to create a system for the target group to access the company's products quickly through various plathforms in modern times we have an organic coffe plantation ready to produce high quality coffee beans.</p>
                      <div style={{ marginTop: "90px" }}>
                          <h1 style={{ fontWeight: "400" }}>Contact</h1>
                          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                              <FaWhatsapp size='32px' />
                              <p style={{ fontSize: "18px", color: "black", fontWeight: "400" }}>020 2362 3639</p>
                          </div>
                      </div>
                  </div>
              </div>


          </div>

    </>
  )
}

export default DetailIngredients