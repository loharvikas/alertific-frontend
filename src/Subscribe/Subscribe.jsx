import axios from 'axios';
import {React, useState, useEffect} from 'react'
import {useLocation, withRouter,} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'
import './Subscribe.css'

const Subscribe = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [isSubscribe, setIsSubscribe] = useState(false);
    const data = location.state.data
    const platform = location.state.services
    console.log({platform})
    function subscribePost() {
        console.log(platform)
        const payload = {
            email: email,
            google_play:platform === 'google'? [data] : undefined,
            app_store:platform === 'apple' ? [data] : undefined,
        }
        axios
            .post('/api/subscribe/', payload)
            .then((res) => {
                if (res.status===201) {
                    setIsSubscribe(true);
                    setEmail("");
                }
            })
            .catch((err) => console.error(err))
    }

    return (
        <div className='container'>
            <header className="subscribe-header">
                <h1>Enter your email to get updates</h1>
            </header>
            <div className="form-body">
                {isSubscribe ?
                    <section className="message success">
                    <h1>Success! You’ll be alerted to new app reviews immediately!</h1>
                    </section>
                    :<span></span>
                }
                <form className='form-control' 
                    onSubmit={(e) => {
                            e.preventDefault();
                            subscribePost();
                }}>
                    <div>
                        <input type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <p className="input-info">we will never share this with anyone else</p>
                    </div>
                    <button className="subscribe-btn btn" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Subscribe)