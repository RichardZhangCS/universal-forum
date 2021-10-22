import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Homepage from './components/Main';
import AboutPage from './components/AboutPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
function App() {
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="">
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
