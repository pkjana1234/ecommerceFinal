import React from 'react'

const Blog = () => {
    return (
        <>
        <section className="gallery">
            <div className="container">
                <h1 className="fw-bold text-blue text-center pb-5">From The Blog</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="./images/catagory-1.jpg" className='img-fluid card-img-top' alt="" />
                            <div className="card-body">
                                <a href="">
                                    <h4>The Best Street Style From London Fashion Week</h4>
                                    <p className="text-mute">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel cum recusandae molestias, temporibus dolore?</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="./images/catagory-2.jpg" className='img-fluid card-img-top' alt="" />
                            <div className="card-body">
                                <a href="">
                                    <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                                    <p className="text-mute">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel cum recusandae molestias, temporibus dolore?</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="./images/catagory-3.jpg" className='img-fluid card-img-top' alt="" />
                            <div className="card-body">
                                <a href="">
                                    <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                                    <p className="text-mute">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vel cum recusandae molestias, temporibus dolore?</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Blog
