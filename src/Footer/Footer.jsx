import {React} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <ul>
                    <li><Link to='/' className="list-item">Home</Link></li>
                    <li><Link to='/contact/' className="list-item">Contact Us</Link></li>
                    <li><Link to="/terms-of-user/" className="list-item">Terms of Use</Link></li>
                    <li><Link to="/privacy-policy/" className="list-item">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer