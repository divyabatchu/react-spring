import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: '',
             hasLoginFailed:false,
             showSucessMessage:false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        //console.log(this.state);
        this.setState({
                    [event.target.name]
            :event.target.value
        })
    }

    // handleUsernameChange(event){
    //     console.log(event.target.name);
    //     this.setState({
    //                 [event.target.name]
    //         :event.target.value
    //     })
    // }
    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState({
    //         password:event.target.value
    //     })
    // }

    loginClicked(){
        if(this.state.username==='div' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
      //  console.log('sucessful')
        // this.setState({showSucessMessage:true})
        //        this.setState({hasLoginFailed:false})
    }
    else{
        this.setState({showSucessMessage:false })
        this.setState({hasLoginFailed:true})
        console.log('Failed')
    }
            
       // console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSucessMessage showSucessMessage={this.state.showSucessMessage}/>
               
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>&nbsp;
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>&nbsp;
                <button className="btn btn-success"  onClick={this.loginClicked}>Login</button>
            </div>
            </div>

        )
    }

}
    function ShowInvalidCredentials(props) {
        if(props.hasLoginFailed) {
            return <div className="aler alert-warning">Invalid credentials</div>
        }
        return null
        }
function ShowLoginSucessMessage(props) {
  // eslint-disable-next-line  
  if(props. showSucessMessage) {
        return <div>sucessfully logined</div>
    }
    return null
    }
export default LoginComponent