import './App.css';
import { React } from 'react';
import Base from './Base/Base'
import Platform from './Platform/Platform'
import Search from './Search/Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer'
import ContactPage from './Contact/Contact'
import Privacy from './Privacy/Privacy'
import Terms from './Terms/Terms'
import Delete from './Delete/Delete'

function App() {

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