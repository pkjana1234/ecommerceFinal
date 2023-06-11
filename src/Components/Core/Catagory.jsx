import React from 'react'

const Catagory = () => {
    return (
        <>
            <section className="catagory my-5">
                <div className="container-fluid px-md-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="catagory-img">
                                <img src="./images/catagory-3.jpg" className='img-fluid'alt=''/>
                                <div className="catagory-content">
                                    <h1>MEN</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <div className="catagory-img">
                                <img src="./images/catagory-2.jpg" className='img-fluid'alt=''/>
                                <div className="catagory-content">
                                    <h1>WOMAN</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <div className="catagory-img">
                                <img src="./images/catagory-1.jpg" className='img-fluid'alt=''/>
                                <div className="catagory-content">
                                    <h1>ELECTRONIC</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Catagory
