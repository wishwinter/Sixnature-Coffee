import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import DataAcademy from './DataAcademy';
import { v4 as uuidv4 } from 'uuid';





const DetailAcademy = () => {
    // const [Academy,setAcademy] = useState([]);

    const { AcademyId } = useParams();

    // useEffect(() => {
    //     // getProducts();
    //     setAcademy(DataAcademy)
    // }, []);


    // const y = Academy.filter(Academys => Academys.id == AcademyId).map(Academys => Academys.bigTitle)
    // const z = Academy.filter(Academys => Academys.id == AcademyId).map(Academys => Academys.id)

    return (
        <>
            <div className='Content-about bg-img' style={{ paddingBottom: "0px" }}>
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-academy.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
                    <li className='breadcrumb-item'><a href='#'>Our services</a></li>
                    <li className='breadcrumb-item'><NavLink reloadDocument to="/Our_services/Academy">Academy</NavLink></li>
                    {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (

                        <li className='breadcrumb-item' key={uuidv4()}><a style={{ color: "black" }} href='#'>{Academys.bigTitle}</a></li>

                    ))}
                </div>
                <div className='container-acdDetail max-1280'>
                    <div className='box-detailAcd' key={uuidv4()}>
                        {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            <h1 key={uuidv4()}>{Academys.bigTitle}</h1>
                        ))}
                        {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            <img key={uuidv4()} src={Academys.img1} />
                        ))}

                    </div>
                    <div className='box-academy' key={uuidv4()}>
                        {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            <div className='img-acd'><img src={Academys.img2} /></div>
                        ))}
                        {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            <div className='text-acd'>
                                <h1>{Academys.smallTitle}</h1>
                                {Academys.Text}
                                <div className='col-de'>
                                    <a href='#' className='detail-c'><img src={Academys.coursee} /></a>
                                    <p>{Academys.DetailC}</p>
                                </div>
                                <div className='col-de'>
                                    <a href='#' className='detail-c'><img src={Academys.whatsappp} /></a>
                                    <p>{Academys.Tell}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='box-academy box-2' key={uuidv4()} >
                        {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            <div className='img-acd'><img src={Academys.img3} /></div>
                        ))}
                        {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            <div className='text-acd'>
                                <h1>{Academys.Title}</h1>
                                {Academys.p}
                                <div className='col-de'>
                                <a href='#' className='detail-c'><img src={Academys.course} /></a>
                                    <p>{Academys.DetailCourse}</p>
                                </div>
                                <div className='col-de'>
                                    <a href='#' className='detail-c'><img src={Academys.whatsapp} /></a>
                                    <p>{Academys.Tel}</p>
                                </div>
                            </div>
                        ))}
                        
                        {/* {DataAcademy.filter(Academys => Academys.id == AcademyId).map(Academys => (
                            
                        ))} */}

                       
                    </div>








                </div>
                <div className='col-listt'>
                    <h1 style={{ textAlign: "center", marginBottom: "40px", fontWeight: "lighter", fontSize: "35px" }}>Testimonial</h1>
                    <div className='conatiner-list max-1280'>
                        <div className='col-list'>
                            <img src='https://sixnaturecoffee.com/backoffice/media/media-61f75ef89fdfe.png' />
                            <h3>Alex Black</h3>
                            <p>Thank you for a great experience. It's a very happy  and fun Barista class to brew, taste and shake from someone who doesn't drink coffee. I practiced until I understood.</p>
                        </div>
                        <div className='col-list'>
                            <img src='https://sixnaturecoffee.com/backoffice/media/media-61f75ed7cb992.png' />
                            <h3>Tiffany Whitewood</h3>
                            <p>It's a class that doesn't disappoint at all.
                                Both skills and techniques in making quality
                                beverages, including the history of coffee cultivation
                                teach in detail get ideas for business</p>
                        </div>
                        <div className='col-list'>
                            <img src='https://sixnaturecoffee.com/backoffice/media/media-61f26a9f9f874.png' />
                            <h3>Richard Anderson</h3>
                            <p>Thank you for a great experience. It's a very happy
                                and fun Barista class to brew, taste and shake from
                                someone who doesn't drink coffee. I practiced until
                                I understood.</p>
                        </div>
                    </div>


                </div>

            </div>





        </>
    )
}

export default DetailAcademy