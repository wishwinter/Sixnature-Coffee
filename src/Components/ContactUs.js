import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const ContactUs = () => {
  const initialValue = { Subject: "", Name: "", Email: "", PhoneNumber: "", Message: "" }
  const [Formvalue, setFormValue] = useState(initialValue);
  const [FormError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...Formvalue, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(Formvalue)) ;
    setSubmit(true);
  }
  useEffect(()=>{
    console.log(FormError);
    if(Object.keys(FormError).length === 0 && isSubmit){
      console.log(Formvalue);
    }
  },[FormError])



  const validate = (values) => {
    const errors ={};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.Subject){
      errors.Subject ="required";
    }
    if (!values.Name) {
      errors.Name = "required";
    }
    if (!values.Email) {
      errors.Email = "required";
    }else if(!regex.test(values.Email)){
      errors.Email = "Email Format";
      
    }
    if (!values.PhoneNumber) {
      errors.PhoneNumber = "required";
    } 
    else if (values.PhoneNumber < 4) {
      errors.PhoneNumber = "Phone number must be more than 4";
    }
    if (!values.Message) {
      errors.Message = "required";
    }

    return errors;
    
  }
  return (
    <>

      <div className='Content-about bg-img' >
        <div className='hero-about'>
          <img src='https://sixnaturecoffee.com/images/istockphoto-contact-us.png'></img>
        </div>
        <div className='breadcrumb max-1280'>
          <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
          <li className='breadcrumb-item'><a href='#'>Corporate</a></li>
          <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Contact us</a></li>
        </div>
        <div className='container-contact max-1280'>
          <div className='contact'>
            <h1 style={{ fontSize: "52px", fontWeight: "lighter" }}>Sixnature</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "18px", marginTop: "10px" }}>
              <div className="icon-contact" style={{ fontWeight: "lighter" }}>
                <img className="pin h-100 w-100" src={require('../images/icon_black_PIN.png')} alt="" />

                <p>
                  Phontong intersection, Chanthabouly district Vientiane Capital,
                  Lao PDR
                </p>
              </div>
              <div className="icon-contact" style={{ fontWeight: "lighter" }}>
                <img className="phone h-100 w-100" src={require('../images/icon_black_Tel.png')} alt="" />
                <p>020 2362 3639</p>
              </div>
              <div className="icon-contact" style={{ fontWeight: "lighter" }}>
                <img className="Email h-100 w-100" src={require('../images/icon_black_EMAIL.png')} alt="" />
                <p>Sixnature@gmail.com</p>
              </div>
            </div>
            <div className="icon-nav" style={{ marginTop: "16px" }}>
              <a href="https://www.facebook.com/SignatureRoasterSupply/" target="_blank"><img src={require('../images/icon_black_FB.png')} alt="" /></a>
              <a href="#"><img src={require('../images/icon_black_WA.png')} alt="" /></a>
              <a href="#"><img src={require('../images/icon_black_Line.png')} alt="" /></a>
              <a href="#"><img src={require('../images/icon_black_IG.png')} alt="" /></a>
              <a href="#"><img src={require('../images/icon_black_TK.png')} alt="" /></a>
            </div>
            <div className='img-contact'>
              <img src='https://sixnaturecoffee.com/images/iStock-481040818.png'></img>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <form onSubmit={handleSubmit}>
              <div className='box-form'>
                <div className='col-item'>
                  <label>Subject <span>*</span></label>
                  <input className={FormError.Subject} type="text" name='Subject' value={Formvalue.Subject} onChange={handleChange}></input>
                  <label style={{color:"red"}}>{FormError.Subject}</label>
                </div>
                <div className='col-item'>
                  <label>Name <span>*</span></label>
                  <input className={FormError.Name} type="text" name='Name' value={Formvalue.Name} onChange={handleChange}></input>
                  <label style={{ color: "red" }}>{FormError.Name}</label>

                </div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "36px" }}>
                  <div className='col-item' style={{ width: "50%" }}>
                    <label>Email <span>*</span></label>
                    
                    <input className={FormError.Email} type="text" name='Email' value={Formvalue.Email} onChange={handleChange}></input>
                    <label style={{ color: "red" }}>{FormError.Email}</label>

                  </div>
                  <div className='col-item' style={{ width: "50%" }}>
                    <label>Phone Number <span>*</span></label>
                    <input className={FormError.PhoneNumber} type="Number" name='PhoneNumber' value={Formvalue.PhoneNumber} onChange={handleChange}></input>
                    <label style={{ color: "red" }}>{FormError.PhoneNumber}</label>

                  </div>
                </div>
                <div className='col-item'>
                  <label>Message <span>*</span></label>
                  <textarea className={FormError.Message} id="" cols="30" rows="10" name='Message' value={Formvalue.Message} onChange={handleChange}></textarea>
                  <label style={{ color: "red" }}>{FormError.Message}</label>

                </div>
                <div className='btn-submit'><button>Submit</button></div>

              </div>

            </form>

          </div>

        </div>
        <div className='conatct-map max-1280'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15178.127755971927!2d102.61015100000002!3d18.000500649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sla!4v1643172250198!5m2!1sen!2sla"></iframe>

        </div>
      </div>

    </>
  )
}

export default ContactUs