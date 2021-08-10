import axios from 'axios';
import {React, useState, useEffect} from 'react'
import {useLocation, withRouter,} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import './Subscribe.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Loader = () => {
    return (
          <div class="loader__element"></div>
    )
  }

const Subscribe = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [error, setError] = useState(false);
    const [submit, setSubmit] = useState(false);
    const data = location.state.data
    const platform = location.state.services
    const country = location.state.country
    function subscribePost() {
        const payload = {
            subscriber: {
                email:email
            },
            google_play:platform === 'google'? data : undefined,
            app_store:platform === 'apple' ? data : undefined,
            country: {
                country_code:country
            }
        }
        console.log({payload})
        axios
            .post('/api/subscription/', payload)
            .then((res) => {
                console.log("fa")
                if (res.status===201) {
                    setIsSubscribe(true);
                    setEmail("");
                    setSubmit(false);
                    setError(false);
                    setTimeout(function() {
                        props.history.push("/")
                    }, 3500)
                }
            })
            .catch((err) => {
                setError(true);
                setSubmit(false);
                console.error(err)})
    }

    return (
        <div className='container'>
            <header className="subscribe-header">
                <h1>Where would you like to receive your alerts?</h1>
            </header>
            <div className="form-body">
                {isSubscribe ?
                    <section className="message success">
                    <h1><div>Success! </div>You’ll now be alerted to new app reviews</h1>
                    </section>
                    :<span></span>
                }
                {error ? 
                    <section className="message danger">
                    <h1>Subscription with this email already exists. Select a different region or app or email</h1>
                    </section>
                    :<span></span>}
                <div className="loader">
                    {submit && <Loader /> }
                </div>
                <form className='form-control' 
                    onSubmit={(e) => {
                            e.preventDefault();
                            setSubmit(true);
                            subscribePost();
                }}>
                    <div>
                        <input type='email' placeholder='Enter your email address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <p className="input-info">We'll never share this with anyone else</p>
                    </div>
                    {!isSubscribe &&    <button className="subscribe-btn btn" type="submit">Create my alert</button>}
                </form>
            </div>
        </div>
    )
}

export default withRouter(Subscribe)