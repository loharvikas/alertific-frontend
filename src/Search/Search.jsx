import {React, useState, } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Result from './Result'
import './Search.css'

const Search = (props) => {
    const [appList, setAppList] = useState("");
    const platform = props.match.params.platform;
    // const {platform} = location.state;
    console.log('props:', props.match.params.platform)

    // function sleep(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    //   }

    async function fetchApps(app_name) {
        if(app_name.length > 0) {     
            axios
                .get(`/${platform}/${app_name}/`)
                .then((res) => setAppList(res.data))
                .catch((err) => console.error(err))
        }
        setAppList('')
    }

    return (
        <div className="container">

            <div className="header">
                <h1>Search for app</h1>
            </div>
            <div className="form-container">
                <form classNam="form">
                    <div className="form-control">
                        <input  id='app' 
                                className="app-input" 
                                placeholder="Enter app name"
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


// const Result = (props) => {
//     return (
//         <div className="result">
//             <div>
//                 <div className="img"></div>
//                 <div className="content">
//                     <h1 className="title">Instagram</h1>
//                     <p className="info">Instagram Inc,</p>
//                 </div>
//                 <div>
//                     <button type="submit" className='btn'>Select</button>
//                 </div>
//             </div>

//         </div>
//     )
// }

export default withRouter(Search)