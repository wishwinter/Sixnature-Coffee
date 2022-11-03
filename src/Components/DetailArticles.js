import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import { DataArticles } from './DataArticles';
import { v4 as uuidv4 } from 'uuid';
const DetailArticles = () => {
    const { ArticlesId } = useParams();
    return (
        <>
            <div className='Content-about bg-img'>
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-articles.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>

                    <li className='breadcrumb-item' ><NavLink reloadDocument to="/Articles">Articles</NavLink></li>
                    {DataArticles.filter(Articles => Articles.id == ArticlesId).map(Articles => (

                        <li className='breadcrumb-item' key={uuidv4()}><a style={{ color: "black" }} href='#'>{Articles.Title}</a></li>
                    ))}

                </div>
                {DataArticles.filter(Articles => Articles.id == ArticlesId).map(Articles => (

                    <div className='Detail-Articles max-1280' key={uuidv4()}>

                    <div className='box-detail-Articles'>
                        <div className='img-detail'>
                                <img src={Articles.img1} />
                          
                        </div>

                            <div className='Detail-Text'>
                            <h1>{Articles.Title}</h1>
                                <p>{Articles.text1}</p>
                                <p>{Articles.text2}</p>
                            </div>
                      
                    </div>

                    <div className='box-detail-Articles'>
                        <div className='img-detail img-order'>
                                <img src={Articles.img2} />
                          
                        </div>

                            <div className='Detail-Text Text-order'>
                         
                                <p>{Articles.text3}</p>
                                <p>{Articles.text4}</p>
                            </div>
                      
                    </div>

                    


                    
                </div>
                ))}




            </div>






        </>
    )
}

export default DetailArticles