import React, { Component } from 'react'

const TodoItem = (props) => (
    <ul className="margin animated flipInX" onClick={props.markDone}>
        <input type="checkbox" checked={props.data.done} />
        <span style={{textDecoration:props.data.done?'line-through':''}}>{props.data.text}</span>
    </ul>
)

export default TodoItem
