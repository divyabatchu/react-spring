import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    reset=()=>{
        this.setState({counter:0})
    }
    render(){
        return(
            <div className="counter">
                <CounterButton add={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton add={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>                
                <CounterButton add={15} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="space">{this.state.counter}</span>
                <div><button onClick={()=>this.reset()}>Reset</button></div>
            </div>
        )
    }
    increment (add) {
        //console.log('increment')
       // this.state.counter +1;
       this.setState({
       counter: this.state.counter + add
            }
        );


    }
    decrement (add) {
        //console.log('increment')
       // this.state.counter +1;
       this.setState({
       counter: this.state.counter - add
            }
        );
    }
}

class CounterButton extends Component {    
    constructor(props) {
        super(props)
    
        this.state = {
             counter : 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    render(){
        return (
            <div className="button1">
                <button onClick={this.increment}>+{this.props.add}</button>
                &nbsp;
                <button onClick={this.decrement}>-{this.props.add}</button>
                {/* <span className="space">{this.state.counter}</span> */}
            </div>
        )
    }
   
     increment () {
        //console.log('increment')
        // this.state.counter +1;
        this.setState({
           
        counter: this.state.counter + this.props.add 
            });

this.props.incrementMethod(this.props.add)
    }
    decrement() {
        this.setState({counter: this.state.counter - this.props.add});

       this.props.decrementMethod(this.props.add);
    }
}


Counter.defaultProps = {
    add :5
}   

Counter.protoTypes = {
    add : PropTypes.number
}

export default Counter

