import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const Data = [
    {
        image: "https://sixnaturecoffee.com/images/24hr.png",
        Text: "Contact 24 hours"
    },
    {
        image: "https://sixnaturecoffee.com/images/protech.png",
        Text: "Professional technician team"
    },
    {
        image: "https://sixnaturecoffee.com/images/warranty.png",
        Text: "Warranty after repair"
    },
]
const rows = [];
for (let i = 0; i < 30; i++) {
    rows.push(i);
} 
console.log(rows);
const Service = () => {
    return (
        <>
            <div className='Content-about bg-img' >
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-fixing.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink end to="/" >Home</NavLink></li>
                    <li className='breadcrumb-item'><a href='#'>Our services</a></li>
                    <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Fixing service</a></li>
                </div>

                <div className='Box-services max-1280'>
                    {Data.map((value) => (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "35px" }} key={uuidv4()}>
                            <div className='box-card' >
                                <img src={value.image} />

                            </div>
                            <p>{value.Text}</p>
                        </div>

                    ))}
                        <div className='dot-fix'>
                           {rows.map(()=>(

                            <div className='dot' key={uuidv4()}></div>

                           ))}
                        </div>

                </div>
                <div className='Detail-service max-1280'>
                    <div className='box-detail'>
                        <div className='img-detail' >
                            <img src='https://sixnaturecoffee.com/backoffice/media/media-62060eaad95c7.jpg' />

                        </div>
                        <p className='psubtext'>We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times We have an organic coffee plantation ready
                            to produce high quality coffee beans. standardized manufacturing plant Make our coffee products have a unique identity that is liked by coffee lovers.</p>
                    </div>
                    <div className='box-detail' >
                        <div className='box-textde'>                        
                        <p  >We are a complete coffee business. With an effort with allocate products to create a system for the target group to access the company's products quickly through various plathforms in modern times we have an organic coffe plantation ready to produce high quality coffee beans. standardized manufacturing plan make our coffee products have a unique identity that is liked by coffee lovers.</p>
                            <p>We are a complete coffee business. With an effort with allocate products to create a system for the target group to access the company's products quickly through various plathforms in modern times.</p>
                        </div>
                        <div className='img-detail'>
                            <img src='https://sixnaturecoffee.com/backoffice/media/media-62060eaada191.jpg' />

                        </div>
                    </div>
                </div>




            </div>


        </>
    )
}

export default Service