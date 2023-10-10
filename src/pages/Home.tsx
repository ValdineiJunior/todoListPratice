import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { useState } from "react";

export function Home() {
    const [ isShowingTodoList, setIsShowingTodoList] = useState(true)
    
    function handleDestroy() {
        setIsShowingTodoList(false)
    }

    return (
        <main>
            <AddTodo/>
            {isShowingTodoList && <TodoList title="Olá" >
                <h2>Title2</h2>
            </TodoList>}
            <button onClick={handleDestroy}>Destruir TodoList</button>
        </main>
    );
}
