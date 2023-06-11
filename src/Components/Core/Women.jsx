import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { ProductsWomenApi } from '../../Redux/Silces/ProductSlice';
const Women = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        // console.log(state.Products.Womendata);
        return state.Products.Womendata
    })
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 0,
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
    const handeltab = () => {
        const tabs = document.querySelectorAll("[data-tab-target]");
        const tabContents = document.querySelectorAll(".tab-content");
        // console.log(tabContents);
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                tabs.forEach((tab) => {
                    tab.classList.remove("active");
                });
                tab.classList.add("active");
                tabContents.forEach((tabContent) => {
                    tabContent.classList.remove("active");
                });
                const target = document.querySelector(tab.dataset.tabTarget);
                // console.log(target);
                target.classList.add("active");
            });
        });
    }
    useEffect(() => {
        dispatch(ProductsWomenApi())
    }, [])
    return (
        <>
            <section className="women_catagory">
                <div className="container-fluid px-md-5">
                    <div className="row gx-5">
                        <div className="col-md-3">
                            <div className="women-cat-img">
                                <img src="./images/women-cat.jpg" className='img-fluid' alt='' />
                                <div className="women-content-wrapper-first text-center">
                                    <h1 className="bg-light px-2">WOMEN'S</h1>
                                    <h5 className="text-white">Discover More</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 align-self-center">
                            <div>
                                <ul className="tabs">
                                    <li data-tab-target="#home-content" onClick={handeltab} className="tab active">Clothing</li>
                                    <li data-tab-target="#about-content" onClick={handeltab} className="tab">Handbag</li>
                                    <li data-tab-target="#shoes-content" onClick={handeltab} className="tab">Shoes</li>
                                    <li data-tab-target="#accessories-content" onClick={handeltab} className="tab">Accessories</li>
                                </ul>
                                <div className="tab-contents">
                                    <div className="tab-content active" id="home-content">
                                        <Slider {...settings}>
                                            {
                                                data && data?.map((e, i) => {
                                                    return (
                                                        <>
                                                            <div className="women-content-wrapper">
                                                                <div className="women-floating-img">
                                                                    <img src={e.thumbnail} className='img-fluid' alt="" srcset="" />
                                                                    <div className="women-content-float">
                                                                        <button className='view-Details'>View Details</button>
                                                                    </div>
                                                                    <div className="float-cart-women">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                                    </div>
                                                                </div>
                                                                <div className="women-inner-content-wrapper text-center">
                                                                    <p className='text-mute my-0 pt-3'>{e.category}</p>
                                                                    <h4>{e.title}</h4>
                                                                    <h5 className="fw-bold text-info">Rs. {e.price}/-</h5>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </div>
                                    <div className="tab-content" id="about-content">
                                        <Slider {...settings}>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-2.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-3.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-4.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="tab-content" id="shoes-content">
                                        <Slider {...settings}>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-2.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-3.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-4.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="tab-content" id="accessories-content">
                                        <Slider {...settings}>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-1.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-2.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-3.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                            <div className="women-content-wrapper">
                                                <div className="women-floating-img">
                                                    <img src="./images/women-catt-4.jpg" className='img-fluid' alt="" srcset="" />
                                                    <div className="women-content-float">
                                                        <button className='view-Details'>View Details</button>
                                                    </div>
                                                    <div className="float-cart-women">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 576 512"><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0h45.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5l-51.6-271c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zm128 440a48 48 0 1 1 96 0a48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96a48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20v-44h44c11 0 20-9 20-20s-9-20-20-20h-44V96c0-11-9-20-20-20s-20 9-20 20v44h-44c-11 0-20 9-20 20z" /></svg>
                                                    </div>
                                                </div>
                                                <div className="women-inner-content-wrapper text-center">
                                                    <p className='text-mute my-0 pt-3'>T-Shirts</p>
                                                    <h4>Pure-Pinapple</h4>
                                                    <h5 className="fw-bold text-info">$35</h5>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Women
