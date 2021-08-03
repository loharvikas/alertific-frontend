import axios from 'axios';
import {React, useState, useEffect} from 'react'
import {useLocation, withRouter,} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import './Subscribe.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Subscribe = (props) => {
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [isSubscribe, setIsSubscribe] = useState(false);
    const data = location.state.data
    const platform = location.state.services
    const country = location.state.country
    console.log(country)
    console.log({platform})
    function subscribePost() {
        console.log(platform)
        const payload = {
            email: email,
            google_play:platform === 'google'? [data] : undefined,
            app_store:platform === 'apple' ? [data] : undefined,
            country: [{
                'country_code': country,
            }]
        }
        console.log({payload})
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
                <h1>Where would you like to receive your alerts?</h1>
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
                        <p className="input-info">We will never share this with anyone else</p>
                    </div>
                    {!isSubscribe &&    <button className="subscribe-btn btn" type="submit">Create my alert</button>}
                </form>
            </div>
        </div>
    )
}

export default withRouter(Subscribe)