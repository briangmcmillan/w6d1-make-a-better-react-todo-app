import React, { Component } from 'react'
import TodoItem from './TodoItem'//We are importing our TodoItem constant from TodoItem.js

class Todos extends Component {
    //Boiler plate line 6, 7, and 8
    constructor(props) {
        super(props)//Conects to to parent file/component
        //Hand built methods/functions that are used later on. Binds together keystrokes and key presses.
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
    //typing(e) is a function that is listening for an event. Once a user begins to type, the state of typing will be set to whatever the user types as the value. That value once input will be changed to Upper Case letters.
    typing(e) {
        this.setState({
            newTodo: e.target.value.toUpperCase()
        })
    }
    //enter(e) is a function that is also listening for an event to fire off. If the key that the user hits is Enter, then whatever the user typed into our input will become the new state/value of the todos property. That value will be saved into a var named updatedTodos. updatedTodos will be added to the end of our array. Finally, the state of our components newTodo property will be reset to '' and the todos property will have the new value saved under updatedTodos.
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
    //markDone(i) is a function that runs if our updatedTodo items are clicked on orchecked. If true, then a our input field checkbox will be checked and a line-through the value will be set. This will only happen if markDone = true. We set this on our TodoItem.js const.
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
