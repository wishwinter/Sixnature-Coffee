import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const DataCafe = [
    {
        id: 1,
        image: "https://sixnaturecoffee.com/backoffice/media/media-620615b427d22.jpg",
        h1: "Franchise package",
        h2: "i like to drink coffee I grew up growing coffee. Coffee is part of my life.",
        p: "We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times We have an organic coffee plantation ready to produce high quality coffee beans. standardized manufacturing plant Make our coffee products have a unique identity that is liked by coffee lovers."
    },
    {
        id: 2,
        image: "https://sixnaturecoffee.com/backoffice/media/media-620615b428641.jpg",
        h1: "Training",
        p: "We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times We have an organic coffee plantation ready to produce high quality coffee beans. standardized manufacturing plant Make our coffee products have a unique identity that is liked by coffee lovers."
    }
    ,
    {
        id: 3,
        image: "https://sixnaturecoffee.com/backoffice/media/media-620615b428641.jpg",
        h1: "Consultation",
        p: "We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times We have an organic coffee plantation ready to produce high quality coffee beans. standardized manufacturing plant Make our coffee products have a unique identity that is liked by coffee lovers."
    }
]
const Cafe = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    console.log(errors);
reset()

}
    return (
        <>
            <div className='Content-about bg-img' style={{paddingBottom:"0px"}}>
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-cafe.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>
                    <li className='breadcrumb-item'><a href='#'>Our services</a></li>
                    <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Cafe</a></li>
                </div>
                <div className='container-Academy max-1280'>

                    {DataCafe.map((value, index) => (

                        <div className={`box-academy ${index % 2 === 0 ? 'left-right' : 'right-left'}`} key={index}>
                            <div className='img-acd'><img src={value.image} /></div>
                            <div className='text-acd'>
                                <h1 >{value.h1}</h1>
                                <h3>{value.h2}</h3>
                                <p>{value.p}</p>

                            </div>



                        </div>




                    ))}




                </div>




                <div className='col-listt'>
                    <div className='conatiner-apply-franchise  max-1280'>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='apply-franchise'>

                                <div className='apply-left' >
                                    <h1>Apply for a Franchise</h1>
                                    <p>We are a complete coffee business. With an effort to allocate products to create a system for the target group to access the company's products quickly through various platforms in modern times.</p>
                                    <div className='col-de' style={{marginTop:"70px"}}>
                                        
                                        <a href="tel:+856 2362 3639">
                                        <img src={require('../images/icon_black_Tel.png')} />
                                          <p>020 2362 3639</p>  
                                        </a>
                                        
                                    </div>
                                </div>
                                <div className='apply-right' >
                                    <div className='col-item-input'>
                                        <label>Name <span>*</span></label>
                                        <input type="text" style={{ border: errors["Name"] ? "1px solid red" : null }} {...register("Name", { required: true, maxLength: 80 })}
                                            aria-invalid={errors.Name ? "true" : "false"} />
                                        {errors.Name?.type === 'required' && <p className='text-error' role="alert">required</p>}
                                    </div>
                                    <div className='col-item-input'>
                                        <label>phone number <span>*</span></label>
                                        <input type="tel" style={{ border: errors["Mobile_number"] ? "1px solid red" : null }}  {...register("Mobile_number", { required: "required", maxLength: 8 })}
                                            aria-invalid={errors.Mobile_number ? "true" : "false"} />
                                        {errors.Mobile_number && <p className='text-error' role="alert">{errors.Mobile_number?.message}</p>}
                                    </div>
                                    <div className='col-item-input'>
                                        <label>Location  <span>*</span></label>
                                        <input type="text" style={{ border: errors["Location"] ? "1px solid red" : null }} {...register("Location", { required: "required", maxLength: 120 })}
                                            aria-invalid={errors.Location ? "true" : "false"} />
                                        {errors.Location && <p className='text-error' role="alert">{errors.Location?.message}</p>}



                                    </div>
                                    <div className='col-item-input-file'>
                                        <label>Image  <span>*</span></label>
                                        <div className='input-set'>
                                            <input type="text" disabled></input>
                                            <input type="file" id="image" multiple="" />
                                            <button type="submit">Attach File</button>
                                        </div>
                                        <p>* ຕ້ອງແມ່ນຮູບປະເພດ 'jpg', 'jpeg', 'pdf', 'png' ເທົ່ານັ້ນ.<br />* ຂະໜາດໄຟລຫ້າມເກີນ 5MB.<br />* ເລືອກໄດ້ສູງສຸດ 3 ໄຟລ.</p>

                                    </div>

                                    <button type="submit" className='btn-sub'>Submit</button>
                                </div>


                            </div>
                        </form>
                    </div>


                </div>
            </div>




        </>
    )
}

export default Cafe