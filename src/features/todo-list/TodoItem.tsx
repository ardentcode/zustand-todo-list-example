import { useTodoListStore } from "./useTodoListStore"

interface TodoItemProps {
  text: string
  id: number
}

export function TodoItem({ text, id }: TodoItemProps) {
  const { deleteTodo } = useTodoListStore()
  const onDeleteTodo = () => deleteTodo(id)

  return (
    <div className="view">
      <label>{text}</label>{" "}
      <button className="destroy" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
}
