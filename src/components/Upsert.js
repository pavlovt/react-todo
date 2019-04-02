import React from 'react';

export default class Upsert extends React.Component{
    render() {
        const {input, change, saveTodo, addTodo, idx} = this.props;

        return (<div>
            <input type="text" value={input} onChange={change} />
            {idx > -1 ? 
                <button className="update" onClick={saveTodo}>Save Todo</button> 
                : <button className="add" onClick={addTodo}>Add Todo</button>}
        </div>);
    }
}