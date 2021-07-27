import React from 'react';
import './Base.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

const Base = () => {
    return (
        <div className="base">
            <header id="header">
                <nav id="nav-bar">
                    <Link to='/'>
                        <div className="brandName" id="nav-item">
                            <h1>Alertific</h1>
                        </div>
                    </Link>
                    <div id="nav-item" className="contact-us">
                                <Link to="/contact/" className="btn">
                                    Contact Us
                                </Link>
                    </div>
                </nav>
            </header>
            <div className="container">
                <main className="content">
                    <header>
                        <h1>Free daily e-mail alerts of new app reviews</h1>
                        <div>
                       
                        </div>
                    </header>
                </main>
            </div>
        </div>
    )
}



export default Base