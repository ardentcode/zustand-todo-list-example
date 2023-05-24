import styles from "../todo-list/TodoList.module.css"
import { useTodoListStore } from "./useTodoListStore"
import { TodoItem } from "./TodoItem"
import { NewTodoItem } from "./NewTodoItem"

export function TodoList() {
  const todos = useTodoListStore((state) => state.todos)
  return (
    <div className={styles.row}>
      <NewTodoItem />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem text={todo} id={index} />
          </li>
        ))}
      </ul>
    </div>
  )
}
