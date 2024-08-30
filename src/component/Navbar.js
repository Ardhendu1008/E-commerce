import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ height: '60px', backgroundColor: '#0f1111' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: 'white' }}>E-commerce</a>
                    <a className="navbar-brand" href="/form" style={{ color: 'white', fontSize: '16px' }}>Login/SignUp</a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#232F3E',height: '60px' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/all">General</Link></li>
                                    <li><Link className="dropdown-item" to="/category/jewelery">Jewelery</Link></li>
                                    <li><Link className="dropdown-item" to="/category/electronics">Electronics</Link></li>
                                    <li><Link className="dropdown-item" to="/category/men's clothing">Men's Cloth</Link></li>
                                    <li><Link className="dropdown-item" to="/category/women's clothing">Women's Cloth</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" id="search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning text-dark" type="submit" onClick={props.function}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
