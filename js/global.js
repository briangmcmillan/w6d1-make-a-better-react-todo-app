import React from 'react'
import ReactDOM from 'react-dom'//'react-dom' is a node library
import Todos from '../components/Todos'//This corresponds

// Your code goes here

function renderView() {
    ReactDOM.render(
        <Todos />,
        document.getElementById('todos')
    )
}

renderView()
