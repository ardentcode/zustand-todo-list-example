import { create } from "zustand"

interface TodoListState {
  todos: string[]
  addTodo: (text: string) => void
  deleteTodo: (index: number) => void
}

export const useTodoListStore = create<TodoListState>((set) => ({
  todos: ["Opowiedzieć o flux"],
  addTodo: (text) => {
    set((state) => ({
      todos: [...state.todos, text],
    }))
  },
  deleteTodo: (index) => {
    set((state) => {
      const todos = state.todos.slice() // shallow copy
      todos.splice(index, 1)
      return {
        todos,
      }
    })
  },
}))
