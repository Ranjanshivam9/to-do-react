import Todo from "./Todo";


const TodoCard = ({ todos, deleteTodo, updateTodoWithDone }) => {



    return (
        <div className="card my-3" >

            {
                todos.length > 0 ?
                    todos.map((todo) => {
                        return (
                            <Todo key={todo.id}
                                todos={todo}
                                deleteTodo={deleteTodo}
                                updateTodoWithDone={updateTodoWithDone} />
                        )
                    })
                    : <div>No todos</div>
            }

        </div>
    )
}

export default TodoCard