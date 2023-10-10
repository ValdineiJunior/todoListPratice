import { PropsWithChildren, useState, createContext, useContext } from "react";
type TodoContextType = {
    todos: string[];
    add: (text: string) => void;
    remove: (index: number) => void;
}

export const TodoContext = createContext<TodoContextType>({} as TodoContextType)

export function TodoContextProvider({ children }: PropsWithChildren) {
    const [todos, setTodos] = useState([
        "Fazer café",
        "Estudar",
        "Passear com a Luna",
    ]);
    function add(text: string) {
        console.log('chamando função add')
        if (text.trim().length > 0) {
            setTodos((todos) => [...todos, text]);
        }
    }
    function remove(index: number) {
        setTodos((todos) => todos.filter((_, i) => i !== index));
    }
    return (
        <TodoContext.Provider value={{todos, add, remove}}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodos() {
    const context = useContext(TodoContext)
    return context
}