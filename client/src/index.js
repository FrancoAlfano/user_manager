import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css"
import React from "react"
import ReactDOM from "react-dom"
import NavBar from './components/Navbar';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import HomePage from './components/Home';
import LoginPage from './components/Login';
import CreateUserPage from './components/CreateUser';


const App=()=>{

    
    return (
        <Router>
        <div className="">
            <NavBar/>
            <Switch>
                <Route path="/create_user">
                    <CreateUserPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))