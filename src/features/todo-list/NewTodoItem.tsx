import { useState } from "react"

import { useTodoListStore } from "./useTodoListStore"

export function NewTodoItem() {
  const [todoText, setTodoText] = useState("")

  const addTodo = useTodoListStore((state) => state.addTodo)
  return (
    <div>
      <input
        type={"text"}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button onClick={() => addTodo(todoText)}>Add todo</button>
    </div>
  )
}
