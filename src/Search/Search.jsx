import {React, useState, } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Result from './Result';
import { trackPromise } from 'react-promise-tracker'
import './Search.css'
import {usePromiseTracker} from 'react-promise-tracker';
import {Loader} from 'react-loader-spinner'
import Spinner from 'react-bootstrap/Spinner'


const Search = (props) => {
    const [appList, setAppList] = useState("");
    const { promiseInProgress } = usePromiseTracker();
    const platform = props.match.params.platform;
    // const {platform} = location.state;
    console.log('props:', props.match.params.platform)

    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }

    async function fetchApps(app_name) {
        if(app_name.length > 0) {
            trackPromise(     
                axios
                    .get(`/${platform}/${app_name}/`)
                    .then((res) => setAppList(res.data))
                    .catch((err) => console.error(err))
            )
        }
        setAppList('')
    }

    return (
        <div className="container">

            <div className="header">
                <h1>Search for an app</h1>
            </div>
            <div className="form-container">
                <form classNam="form">
                    <div className="form-control">
                        <input  id='app' 
                                className="app-input" 
                                placeholder="Enter your app name here..."
                                onChange={e => fetchApps(e.target.value)}
                                >
                        </input>
                    </div>
                </form>
            </div>
            <Result app_list = {appList} platform={platform}/>
        </div>
    )
}


export default withRouter(Search)