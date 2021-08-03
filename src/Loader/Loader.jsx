import {React} from 'react';
import {withRouter} from 'react-router-dom';
import './Loader.css'

const Loader = () => {
    return (
        <div class="loader">
            <div class="loader__element"></div>
        </div>
    )
}

export default withRouter(Loader)