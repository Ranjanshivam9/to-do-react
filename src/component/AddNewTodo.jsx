import React, { useState } from 'react'

const AddNewTodo = ({ userSubmit }) => {

    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')


    const setText = (e) => {
        setTitle(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        userSubmit(title, task)
    }
    return (
        <>
            <div>
                <form className='card p-2 '>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input className="form-control" onChange={(e) => setText(e)} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Task</label>
                        <input className="form-control" onChange={(e) => setTask(e.target.value)} />
                    </div>

                    <button onClick={(e) => onSubmit(e)} className="btn btn-success">Submit</button>
                </form>
            </div>

        </>
    )
}

export default AddNewTodo