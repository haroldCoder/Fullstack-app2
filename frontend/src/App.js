import { ReactDOM } from "react";
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navi from './components/navigation';
import CreateUsers from './components/createusers';
import Users from "./components/users";
import Notes from "./components/notes";
import Home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function App(){
  return(
    <Router>
      <Navi/>
      <div className="panel">
      <div className="container-fluid p-4">
        <Route path="/" exact component={Home}/>
        <Route path="/users" exact component={Users}/>
        <Route path="/create" exact component={CreateUsers}/>
        <Route path="/notes" exact component={Notes}/>
      </div>
      </div>
      
    </Router>
  );
   }
export default App;