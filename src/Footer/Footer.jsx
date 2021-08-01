import {React} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <li><Link to='/contact/'>Contact Us</Link></li>
                    <li><Link >Terms of Use</Link></li>
                    <li><Link >Privacy Policy</Link></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer