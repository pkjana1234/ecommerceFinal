import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          <div className="wrapper-content-1">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-md-6">
                  <h5 className='fw-bold text-blue'>WELCOME TO</h5>
                  <h1 className='fw-bolder'>Ecommerce Website</h1>
                  <p className="text-mute">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum et sint quis dolorem harum? A praesentium, dolor fuga dicta dolore et, facere delectus veniam, doloribus magni illo! Non, nisi.</p>
                  <div className="">
                    <button class="cssbuttons-io-button"> Get started
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-content-2">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-md-6">
                  <h5 className='fw-bold text-blue'>WELCOME TO</h5>
                  <h1 className='fw-bolder'>Ecommerce Website</h1>
                  <p className="text-mute">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum et sint quis dolorem harum? A praesentium, dolor fuga dicta dolore et, facere delectus veniam, doloribus magni illo! Non, nisi.</p>
                  <div className="">
                    <button class="cssbuttons-io-button"> Get started
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper-content-3">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="row">
                <div className="col-md-6">
                  <h5 className='fw-bold text-blue'>WELCOME TO</h5>
                  <h1 className='fw-bolder'>Ecommerce Website</h1>
                  <p className="text-mute">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum et sint quis dolorem harum? A praesentium, dolor fuga dicta dolore et, facere delectus veniam, doloribus magni illo! Non, nisi.</p>
                  <div className="">
                    <button class="cssbuttons-io-button"> Get started
                      <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Banner
