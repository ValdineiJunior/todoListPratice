import { useTodos } from "../contexts/TodoContext";



export function CountTodo() {
    const context = useTodos()
    return (
        
        <p>Contador {context.todos.length}</p>
    )
}