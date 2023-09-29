type TodoListProps = {
    todos: string[];
    remove: (index: number) => void
}

export function TodoList({ todos, remove }: TodoListProps) {

    return (
        <div>
            <h1>Todo List</h1>
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
        </div>
    )
}