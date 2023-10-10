import { ReactNode, ComponentProps, useEffect } from "react";
import { CountTodo } from "./CountTodo";
import { useTodos } from "../contexts/TodoContext";

type TodoListProps = {
    children: ReactNode
} & ComponentProps<"h1">

export function TodoList({ children, ...rest }: TodoListProps) {
    const {remove, todos} =useTodos()
    useEffect(() => {
        // const handleResize = () => {
        //     console.log("handleResize")
        // }
        // window.addEventListener('resize', handleResize)

        return () => {
            console.log('componente destruido')
        }
    }, [])

    return (
        <div>
            <h1 {...rest}>Todo List</h1>
            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => remove(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
            <CountTodo />
            {children}
        </div>
    )
}