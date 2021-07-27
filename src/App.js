import logo from './logo.svg';
import './App.css';
import Base from './Base/Base'
import Platform from './Platform/Platform'
import Search from './Search/Search'
import subscribe from './Subscribe/Subscribe'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Subscribe from './Subscribe/Subscribe';
import ContactPage from './Contact/Contact'


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
          <Route exact path="/">
            <Platform></Platform>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
