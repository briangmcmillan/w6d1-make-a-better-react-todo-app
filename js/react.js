//Loading other libraries
//Name on the left is a variable names that we can use within our file
//Second name are files
import React from 'react'
import ReactDOM from 'react-dom'//only imported once
import Posts from '../components/Posts'

window.renderView = function(data) {
    ReactDOM.render(//Renders the view. Can render only 1 component.
        <Posts data={data} />,//holds everything in your app. 1 component only. Babel replaces this tag with the equivalent JS function. Everything in that tag is related to view.
        // This is what <Posts data={data} /> is doing
        // React.createElement('Posts', {data: data}),
        document.getElementById('posts'))//this always has to be an ID
}

renderView(posts)
