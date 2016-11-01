import React from 'react'//'react' is a node library held in the node_modules folder
import ReactDOM from 'react-dom'//'react-dom' is a node library held in the node_modules folder
import Todos from '../components/Todos'//We are importing our component 'Todos'. (..) means same w6d1 folder, in the components folders and the Todos.js file.

// Your code goes here
//renderView() method renders our component and where it is going to render it. In this example, our component is called Todos and the location where it will be rendered in in the HTML ID todos.
function renderView() {
    ReactDOM.render(
        <Todos />,
        document.getElementById('todos')
    )
}

renderView()
