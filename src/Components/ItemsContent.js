import React from 'react'
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';



const start = 0;
const end = 3;

const ItemsContent = (props) => {
     
  return (
    <>
        {/* {props.detail.map((value,index)=>(
          
          <div className='card-content' key={uuidv4()}>
            
            <NavLink end to={value.link}>
                    <img src={value.Img}></img>
                <div className='Text-title'>
                      <h1>{value.Text_Title}</h1>
                </div>
            </NavLink>
        </div>
        ))} */}

<div className='flext-first'>
      {props.detail.map((value, i) => {
        if (i >= 0 && i <= 3) {
          return (
            <div className='card-content' key={uuidv4()}>

              <a href={value.link}>
              <img src={value.Img}></img>
                <div className='Text-title'>
                  <h1>{value.Text_Title}</h1>
                </div>
              </a>
            </div>
          );
        }
      })}

      </div>


      <div className='flext-last'>
         {props.detail.map((value, i) => {
        if (i >= 4 && i <= 6) {
          return (
            <div className='card-content' key={uuidv4()}>

              <a href={value.link}>
                <img src={value.Img}></img>
                <div className='Text-title'>
                  <h1>{value.Text_Title}</h1>
                </div>
              </a>
            </div>
          );
        }
      })}
      </div>
     

    </>
  )
}




export default ItemsContent