import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.js'
import WelcomeComponent from './WelcomeComponent.js'
import LoginComponent from './LoginComponent.js'
import FooterComponent from './FooterComponent.js'
import HeaderComponent from './HeaderComponent.js'
import ListTodosComponent from './ListTodosComponent.js'
import ErrorComponent from './ErrorComponent.js'
import LogoutComponent from './LogoutComponent.js'


export class TodoApp extends Component {
    render() {
        return (
            <div className="todo">
               
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                  <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    </>
                    <FooterComponent/>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}
export default TodoApp
