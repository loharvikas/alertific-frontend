import React from 'react';
import './Base.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {useLocation, withRouter,} from 'react-router-dom';

const Base = (props) => {
    const currentPath = props.history.location.pathname;
    console.log(currentPath)
    return (
        <div className="base">
            <header id="header">
                <nav id="nav-bar">
                    <div className="brandName" id="nav-item">
                        <Link to='/'>                
                                <h1>Alertific</h1>
                        </Link>
                    </div>
                    <div id="nav-item" className="contact-us">
                        <Link to="/contact/" className="btn">
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </header>
            { currentPath !== '/privacy-policy/' && currentPath !== '/terms-of-user/'  ? <Content></Content>: <span></span>}
        </div>
    )
}

function Content () {
    return (
        <div className="container">
             <main className="content">
                    <header>
                        <h1>Free daily alerts of new app reviews</h1>

                    </header>
                </main>    
        </div>
    )
}


export default withRouter(Base)