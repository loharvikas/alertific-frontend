import {React, useState} from 'react'
import axios from 'axios'
import './Contact.css'
import { getDefaultNormalizer } from '@testing-library/react'
import {withRouter,} from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Loader = () => {
    return (
          <div class="loader__element"></div>
    )
  }

function ContactPage(props) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [submit, setSubmit] = useState(false);
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
                    setSubmit(false);
                    setTimeout(function() {
                        props.history.push("/")
                    }, 3500)
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
                    <h1>Thanks for your message – we’ll be right back to you!</h1>
                    </section>
                }
                {submit && <Loader />}
                   
                <form className="form-control" onSubmit={e => {
                    e.preventDefault();
                    setSubmit(true);
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
                        <p className="input-info">Feedback, bugs, requests for new features....whatever's on your mind, we’d love to hear from you!</p>
                    </div>
                    <div className="contact-data">
                        <button type="submit" className="subscribe-btn btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(ContactPage)