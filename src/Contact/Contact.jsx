import {React, useState} from 'react'
import axios from 'axios'
import './Contact.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default function ContactPage() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSend, setIsSend] = useState(false);
    function sendFeedbackEmail() {
        const payload = {
            'email': email,
            'message': message
        }
        console.log({payload})
        axios
            .post("/api/feedback/", payload)
            .then((res) => {
                if(res.status===201) {
                    setEmail("");
                    setMessage("");
                    setIsSend(true);
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='container'>
            <div className="form-body">
                <header className="subscribe-header">
                    <h1>Contact Us</h1>
                </header>
                {isSend && 
                    <section className="message success">
                    <h1>Thank you for your message!</h1>
                    </section>
                }
                   
                <form className="form-control" onSubmit={e => {
                    e.preventDefault();
                    sendFeedbackEmail();
                }}>
                    <div className="form-data">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" value={email} id="email" name="email" placeholder='Enter your email address' onChange={e=>setEmail(e.target.value)}></input>
                    </div>
                    <div className="form-data">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea type="email" value={message} id="message" name="message" placeholder="Enter your message..." onChange={e => setMessage(e.target.value)}></textarea>
                        <span className="input-info">Feedback, bugs, requests for new features....whatever's on your mind, we’d love to hear from you!</span>
                    </div>
                    <div className="contact-data">
                        <button type="submit" className="subscribe-btn btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}