import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
    //Boiler plate line 6, 7, and 8
    constructor(props) {
        super(props)//Conects to to parent file/component
        //Hand built methods/functions that are used later on
        this.typing = this.typing.bind(this)
        this.enter = this.enter.bind(this)
        this.markDone = this.markDone.bind(this)
        //Sets initial starter state
        this.state = {
            //state needs to be aware of where to put and manage input and list
            //New items typed in (''). Plus the ones that were already added ([])
            newTodo: '',
            todos: []
        }
    }

    typing(e) {
        this.setState({
            newTodo: e.target.value.toUpperCase()
        })
    }

    enter(e) {
        if (e.key === 'Enter') {
            let updatedTodos = this.state.todos

            updatedTodos.push({
                text: e.target.value,
                done: false
            })

            this.setState({
                newTodo: '',
                todos: updatedTodos
            })
        }
    }

    markDone(i) {
        let updatedTodos = this.state.todos

        updatedTodos[i].done = !updatedTodos[i].done

        this.setState({
            todos: updatedTodos
        })
    }

    render() {
        var items = this.state.todos.map((input, i) => {
            return <TodoItem data={input} key={i} markDone={() => this.markDone(i)} />
        })

        return <div>
            <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter} />
            <ul className="list-group">
                {items}
            </ul>
        </div>
    }
}

export default Todos
