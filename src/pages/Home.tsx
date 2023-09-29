import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { useState } from "react";

export function Home() {
    const [todos, setTodos] = useState([
        "Fazer café",
        "Estudar",
        "Passear com a Luna",
    ]);
    function add(text: string) {
        if (text.trim().length > 0) {
            setTodos((todos) => {
                return [...todos, text];
            });
        }
    }
    function remove(index: number) {
        setTodos((todos) => todos.filter((_, i) => i !== index));
    }
    return (
        <main>
            <AddTodo add={add} />
            <TodoList todos={todos} remove={remove} />
        </main>
    );
}
