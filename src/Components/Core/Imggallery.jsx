import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { ProductsApi } from '../../Redux/Silces/ProductSlice';
const Imggallery = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.Products.alldata
    })

    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 10,
        arrow: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        dispatch(ProductsApi())
    }, [])
    console.log(data);
    return (
        <>
            <section className="gallery py-5">
                <Slider {...settings}>
                    {
                        data && data?.map((e, i) => {
                            return (
                                <>
                                    <div className="gallery-img-wrapper">
                                        <img src={e.thumbnail} alt="" />
                                        <div className="gallery-content">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fed223" d="M9 6v2H2V6h7m0 5v2H2v-2h7m9 5v2H2v-2h16m1.31-4.5c.44-.68.69-1.5.69-2.39c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 16l1.39-1.39l-3.08-3.11m-3.81.11c-1.38 0-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5a2.5 2.5 0 0 1 0 5Z" /></svg>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </Slider>
            </section>
        </>
    )
}

export default Imggallery
