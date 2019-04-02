import React from 'react';

export default class Todo extends React.Component{
    render() {
        const {v, onDelete, onEdit} = this.props;

        return (<li>{v} 
            <a href="#" onClick={onEdit}>Edit</a> 
            <a href="#" onClick={onDelete}>Delete</a>
        </li>);
    }
}