import {Route, Switch, BrowserRouter} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUpPage';
import MoviesTab from './components/MoviesTab';
import './App.css';


function App() {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {MoviesTab}/>
      <Route exact path = "/login" component = {LoginPage}/>
      <Route exact path = "/signup" component = {SignUp}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
