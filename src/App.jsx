import TodoCard from "./component/TodoCard";
import { useState } from 'react';
import AddNewTodo from './component/AddNewTodo';

export default function App() {

  const todos = [
    {
      id: 1,
      title: 'Sample title',
      task: 'Sample task to perfom',
      done: false
    },
  ]

  const [todoList, setTodoList] = useState(todos)

  const userSubmit = (title, task) => {
    let id;
    if (todoList.length > 0) {
      id = todoList[todoList.length - 1].id + 1
    } else {
      id = 1
    }

    const newTodo = {
      id: id,
      title: title,
      task: task
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const deletedList = todoList.filter(e => e.id !== id)
    setTodoList(deletedList)

  }

  const updateTodoWithDone = (id, value) => {
    const newList = todoList.map((t) =>
      t.id === id ? { ...t, done: value } : t
    )

    setTodoList(newList)
  }
  console.log("render full app");
  return (
    <div className="main-div">
      <AddNewTodo userSubmit={userSubmit} />
      <TodoCard todos={todoList}
        deleteTodo={deleteTodo}
        updateTodoWithDone={updateTodoWithDone} />
    </div>

  );
}




