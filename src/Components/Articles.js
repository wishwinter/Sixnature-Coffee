import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { DataArticles } from './DataArticles';
const Articles = () => {
    return (
        <>
            <div className='Content-about bg-img'>
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-articles.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>

                    <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Articles</a></li>
                </div>
                <div className='container-Aricles max-1280'>


                    {DataArticles.map((value, index) => (

                        <div className='box-aricles' key={index}>
                            <div className='img-aricles'>
                             <img src={value.img1} /></div>

                           
                            <div className='under-img'>
                                <h3>{value.Title}</h3>
                                <h6>{value.Date}</h6>

                                <p>{value.Titlecard}</p>

                                <div className='btn-Read'><Link to={`/Articles/${value.id}`}>Read more</Link></div>
                                
                            </div>




                        </div>
                    ))}






                </div>






            </div>






        </>
    )
}

export default Articles