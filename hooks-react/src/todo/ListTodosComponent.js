import React, { Component } from 'react'
//import {Link} from 'react-router-dom'

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos :[ 
            { id:1, description:'React', done:false, targetDate: new Date()},
            { id:2, description:'javaFx', done:false, targetDate: new Date()},
            { id:3, description:'SpringBoot', done:false, targetDate: new Date()},
            { id:4, description:'Microservices', done:false, targetDate: new Date()}
            ]
        }
    }

    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Target Date</th>
                            <th>Is Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                        <tr key={todo.id}>
      
        <td>{todo.description}</td>
        <td>{todo.done.toString()}</td>
        <td>{todo.targetDate.toString()}</td>
                        </tr>
                             ) }
                        </tbody>
                </table>
                 </div>
                 </div>
        )
    }
}

export default ListTodosComponent