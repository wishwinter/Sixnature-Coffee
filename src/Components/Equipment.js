import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';



import ProductData from './ProductData'


// const ProductData = [{
//     id: 1,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ac9be0f40.jpg",
//     ProName: "VBM-LOLLO-2G",
//     ProPrice: "฿155,000"
// },
// {
//     id: 2,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ac5a91d48.jpg",
//     ProName: "CARIMALI BUBBLE",
//     ProPrice: "฿125,000"
// },
// {
//     id:3,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ac737d886.jpg",
//     ProName: "CARIMALI PRATICA-2G",
//     ProPrice: "฿125,000"
// }
// ,
// {
//     id: 4,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6245688d711d7.jpg",
//     ProName: "CARIMALI PRATICA 1G",
//     ProPrice: "฿65,000"
// }
// ,
// {
//     id: 5,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ace1c1bcf.jpg",
//     ProName: "Zentis-2B-V",
//     ProPrice: "฿32,500"
// }
// ,
// {
//     id: 6,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ad1d97445.jpg",
//     ProName: "Zentis-3200E (NEO)",
//     ProPrice: "฿32,500"
// }
// ,
// {
//     id: 7,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214a499801aa.jpg",
//     ProName: "CARIMALI X010",
//     ProPrice: "฿24,500"
// }
// ,
// {
//     id:8,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214acb02a784.jpg",
//     ProName: "CARIMALI X-011",
//     ProPrice: "฿20,500"
// }
// ,
// {
//     id: 9,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ad354b180.jpg",
//     ProName: "Zentis Z-2000",
//     ProPrice: "฿22,500"
// }
// ,
// {
//     id: 10,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214acca86b4b.jpg",
//     ProName: "Zentis Z-1900",
//     ProPrice: "฿20,500"
// }
// ,
// {
//     id: 11,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6214ac88ee48d.jpg",
//     ProName: "EMC-15",
//     ProPrice: "฿3,000"
// }
// ,
// {
//     id: 12,
//     image: "https://sixnaturecoffee.com/backoffice/media/media-6245638d81f14.jpg",
//     ProName: "Zentis Domani 2GR.E",
//     ProPrice: "฿105,000"
// }
// ]





const Equipment = () => {
    // const [Product, setProduct] = useState([]);


    // async function getProducts(){
    //     const res = await fetch('https://productapi.wishkim.repl.co/Products');
    //     const resJS = await res.json();
    //     setProduct(resJS);
    // }

    // useEffect(()=>{
    //     getProducts();
    // },[]);

   
    return (
        <>
            <div className='Content-about bg-img' >
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-equipment.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
                    <li className='breadcrumb-item'><a href='#'>Products</a></li>
                    <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Equipment</a></li>
                </div>
                <p className='ptitle max-1280' >
                    We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the
                    company's products quickly through various platforms in modern times.</p>

                <div className='Card-product max-1280'>
                    {/* <Product data={ProductData}/> */}
                    {ProductData.map((value,index) => (
                        <div className='Card-box' key={index} >
                            <div className='pro-img'><img src={value.image} /></div>
                            <p style={{ fontSize: "20px" }}>{value.ProName}</p>
                            <p>{value.ProPrice}</p>

                            <NavLink reloadDocument end to={`/Products/Equipment/DetailProduct/${value.id}`}>Read more</NavLink>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Equipment