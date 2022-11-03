import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export const Factory = () => {
    return (
        <>
            <div className='Content-about bg-img'>
                <div className='hero-about'>
                    <img src='https://sixnaturecoffee.com/images/bg-roasting.png'></img>
                </div>
                <div className='breadcrumb max-1280'>
                    <li className='breadcrumb-itemm'><NavLink reloadDocument end to="/" >Home</NavLink></li>

                    <li className='breadcrumb-item' ><a style={{ color: "black" }} href='#'>Roasting Factory</a></li>
                </div>
                <div className='Factory-conatiner max-1280'>
                    <div className='Factory-detail'>
                        <div className='Factory-top'>
                            <div className='Factory-img'>
                                <img src='https://sixnaturecoffee.com/images/roasting-factory-1.png' />

                            </div>
                            <div className='Factory-Text'>
                                <p>ເພື່ອໃຫ້ຂະບວນການແປຮູບສົມບູນເຮົາກໍ່ໄດ້ມີໂຮງຂົ້ວກາເຟທີ່ສາມາດຂົ້ວກາເຟຮອງຮັບບັນດາ ຄາເຟ້ຕ່າງໆທີ່ຕ້ອງການຮູບແບບທີ່ຫລາກຫລາຍໂຮງຂົ້ວເຮົາຢູ່ ຕັ້ງໃຈໃຫ້ໄດ້ມາດຕະຖານຄວາມສະອາດ ແລະ ມາດຕະຖານການຂົ້ວກາເຟໃຫ້ໄດ້ມີລົດຊາດດີໂດຍຜ່ານນັກວິຊາການຄວບຄຸມການຂົ້ວໄດ້ເປັນຢ່າງດີສາມາດທີ່ຈະຕອບສະຫນອງຄວາມຕ້ອງການຂອງລູກຄ້າທີ່ຕ້ອງການລົດຊາດກາເຟທີ່ແຕກຕ່າງກັນເພື່ອໃຫ້ໄດ້ກາເຟທີ່ມີລົດຊາດທີ່ຮ້ານທີ່ດີທີ່ສຸດຕາມທີ່ບັນດາຮ້ານກາເຟຕ້ອງການ.</p>
                                <p>In order for our complete processing process to have a coffee grinder that can roast coffee to accommodate a variety of coffees the need a variety of styles, our brewers aim to meet the standards of cleanliness and roasting standards to taste good through technicians, the roasting control is good, able to meet the needs of customers who want different coffee flavors to get the best tasting coffee as coffee shop want.</p>
                            </div>


                        </div>
                        <div className='img-top'>
                            <div >                           
                             <img  src='https://sixnaturecoffee.com/images/roasting-factory-2.png' />
                            </div>
                            <div >
                                <img src='https://sixnaturecoffee.com/images/roasting-factory-3.png' />
                            </div>

                        </div>





                    </div>







                </div>







            </div>







        </>
    )
}
