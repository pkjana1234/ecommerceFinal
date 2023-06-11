import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex" href="#">
                        <img src="./images/logo.png" className='img-fluid' /><h4 className='mt-2 ms-1 text-white'>Ecommerce</h4>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PRODUCTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">LOGIN</a>
                            </li>
                            <li className="nav-item">
                                <Link href="" className='cart'>
                                    <FiShoppingCart className='cart-icon' />
                                    <span className='cart-count'>0</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2 ms-4 nav-input" type="search" placeholder="Search" aria-label="Search" />
                            <button className='custom-btn'>SEARCH</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
