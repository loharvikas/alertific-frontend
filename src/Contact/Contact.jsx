import {React} from 'react'
import './Contact.css'
export default function ContactPage() {
    return (
        <div className='container'>
            <div className="form-body">
                
                <header className="subscribe-header">
                    <h1>Contact Us</h1>
                </header>
                    <section className="message success">
                    <h1>Thank you for your feedback!</h1>
                    </section>
                   
                <form className="form-control">
                    <div className="form-data">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" name="email" placeholder='Enter your email address'></input>
                    </div>
                    <div className="form-data">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea type="email" id="message" name="message" placeholder="Enter your message..."></textarea>
                        <span className="input-info">Feedback, bugs, requests for new features....whatever ’s on your mind, we’d love to hear from you!</span>
                    </div>
                    <div className="contact-data">
                        <button type="submit" className="subscribe-btn btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}