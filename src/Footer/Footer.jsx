import {React} from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            {/* <div className="brandName">
                <h1>Alertific</h1>
            </div> */}
            <div className="content">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    {/* <li><a href="#">Terms and Condition</a></li> */}
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer