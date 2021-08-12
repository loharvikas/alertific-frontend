import {React, useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom';
import axios from 'axios'
import './Delete.css'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const Loader = () => {
    return (
          <div class="loader__element"></div>
    )
  }


const Delete = (props) => {
    const id = props.match.params.id;
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    const [deleteSub, setDeleteSub] = useState(false);
    function deleteRequest () {
        axios
            .delete(`/api/subscription/delete/${id}/`)
            .then(res =>  {
                if (res.status === 204) {
                    console.log(res)
                    setSubmit(false);
                    setDeleteSub(true);
                    setTimeout(function() {
                        props.history.push("/")
                    }, 3500)
                }
            })
            .catch(err => {
                setError(true);
                setSubmit(false);
                setTimeout(function() {
                    props.history.push("/")
                }, 4000)
                console.error(err)})
    }
    return (
        <div className="container">
             <main className="delete-content">
                    <header>
                        <h1>Are you sure you want to delete this subscription ?</h1>
                    </header>
                    {deleteSub ?
                    <section className="message success">
                    <h1><div>Deleted! </div>You’ll not receive any new update.</h1>
                    </section>
                    :<span></span>
                }
                {error ? 
                    <section className="message danger">
                    <h1>No details found</h1>
                    </section>
                    :<span></span>}
                    <div className="loader">
                    {submit && <Loader /> }
                </div>
            </main>
            <form className="delete-form" onSubmit={e => {
                e.preventDefault();
                setSubmit(true);
                deleteRequest();
            }
            }>
                <button className="delete yes" type="submit">Delete</button>
                <button className="delete no" onClick={e => {props.history.push("/")}}>No</button>
            </form>
        </div>
    )
}


export default withRouter(Delete)