import './App.css';
import {React, useEffect } from 'react';
import Base from './Base/Base'
import Platform from './Platform/Platform'
import Search from './Search/Search'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer'
import ContactPage from './Contact/Contact'
import Privacy from './Privacy/Privacy'
import Terms from './Terms/Terms'
import Delete from './Delete/Delete'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-207696426-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-207734840-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  useEffect(() => {
   console.log(window.location.pathname)
  })
  return (
    <div>
      <Router>
        <Route path="/">
            <Base></Base>
        </Route>
        <Switch>
          <Route path='/search/:platform'>
            <Search></Search>
          </Route>
          <Route path='/subscribe/'>
            <Subscribe></Subscribe>
          </Route>
          <Route exact path="/contact/">
            <ContactPage></ContactPage>
          </Route>
          <Route exact path="/privacy-policy/">
            <Privacy></Privacy>
          </Route>
          <Route exact path="/terms-of-user/">
            <Terms></Terms>
          </Route>
          <Route exact path="/delete/:id/">
            <Delete></Delete>
          </Route>
          <Route exact path="/">
            <Platform></Platform>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;