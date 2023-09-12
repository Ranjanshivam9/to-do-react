import React, { useState } from 'react'

const Todo = ({ todos, deleteTodo, updateTodoWithDone }) => {

    const [strike, setStrike] = useState(false)
    const [btnColor, setbtnColor] = useState("btn-primary")
    const [btnName, setBtnName] = useState('Done')


    let titleClass = "card-header"
    let taskClass = "card-text"

    let strikeClass = "strike"

    let title = strike ? `${titleClass} ${strikeClass}` : titleClass
    let task = strike ? `${taskClass} ${strikeClass}` : taskClass


    const handleDelete = () => {

        deleteTodo(todos.id)
    }
    const handleStrike = (e) => {

        if (!todos.done) {
            setbtnColor("btn-warning")
            setBtnName('Undo')
            setStrike(true)
            updateTodoWithDone(todos.id, true)

        } else {
            setbtnColor("btn-primary")
            setBtnName('Done')
            setStrike(false)
            updateTodoWithDone(todos.id, false)

        }
    }

    return (

        <div className="card m-3">
            <h5 className={title}>{todos.title}</h5>
            <div className="card-body">
                <p className={task}>{todos.task}</p>
                <button className={`btn ${btnColor} mx-2`} onClick={(e) => handleStrike(e)}>{btnName}</button>
                <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
            </div>
        </div>

    )
}

export default Todo