import logo from './logo.svg';
import './App.css';
import Login from  './Auth/Login'
import Search from './Search/Search'
import Home from './Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route  exact path ="/"  component={Login}/>
      <Route exact path ="/home"  component={Home}/>
      <Route exact path ="/search"  component={Search}/>
      </Switch>
      
    </Router>
  );
}

export default App;
