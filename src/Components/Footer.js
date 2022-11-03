import React from 'react'
import { Link, NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="ft-container max-1280">
                    <div className="content-footer">
                        <div className="logo-text">
                            <img className="h-100 w-100" src={require('../images/Group 14083.png')} alt="" />
                            <p>
                                We are a complete coffee business. We have coffee roasting
                                factory. We produce quality products for you.
                            </p>
                        </div>
                        <div className="icon-footer">
                            <div className="icon-contact">
                                <img className="pin h-100 w-100" src={require('../images/icon_Pin.png')} alt="" />
                                <p>
                                    Phontong intersection, Chanthabouly district Vientiane Capital,
                                    Lao PDR
                                </p>
                            </div>
                            <div className="icon-contact">
                                <img className="phone h-100 w-100" src={require('../images/icon_Phone.png')} alt="" />
                                <p>020 2362 3639</p>
                            </div>
                            <div className="icon-contact">
                                <img className="Email h-100 w-100" src={require('../images/icon_Email.png')} alt="" />
                                <p>Sixnature@gmail.com</p>
                            </div>
                            <div className="icon-nav">
                                <a href="https://www.facebook.com/SignatureRoasterSupply/" target="_blank"><img src={require('../images/icon_FB.png')} alt="" /></a>
                                <a href="#"><img src={require('../images/icon_WA.png')} alt="" /></a>
                                <a href="#"><img src={require('../images/icon_Line.png')} alt="" /></a>
                                <a href="#"><img src={require('../images/icon_IG.png')} alt="" /></a>
                                <a href="#"><img src={require('../images/icon_TK.png')} alt="" /></a>
                            </div>
                        </div>
                        <div className="text-footer">
                            <div className="col-text">
                                <li><a href='/'>Home</a></li>
                                <li><a href="#">Corporate</a></li>
                                <li><a href="/Corporate/About">About us</a></li>
                                <li><a href='/Corporate/Contact-us'>Contact us</a></li>
                            </div>
                            <div className="col-text">
                                <li><a href='/Articles'>Articles</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href='/Products/Equipment'>Equipment</a></li>
                                <li><a href='/Products/Ingredients'>Ingredients</a></li>
                                <li><a href='/Our_services/Fixing_service'>Fixing service</a></li>
                            </div>
                            <div className="col-text">
                                <li><a href='/Farm_Fresh_food'>Farm &amp; Fresh food</a></li>
                                <li><a href="#">Our services</a></li>
                                <li><a href='/Our_services/Academy'>Academy</a></li>
                                <li><a href='/Our_services/Cafe'>Cafe</a></li>
                            </div>
                            <div className="col-text">
                                <li><a href='/Roasting_Factory'>Roasting Factory</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer