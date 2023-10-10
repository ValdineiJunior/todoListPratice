import { useState } from "react"
import { useTodos } from "../contexts/TodoContext"

export function AddTodo() {
    const [text, setText] = useState("")
    const context = useTodos()
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            context.add(text)
            setText("")
        }
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <input onChange={(event) => {
                setText(() => {
                    return event.target.value
                })
            }} onKeyUp={handleKeyPress} value={text} type="text" placeholder="Add your task" />
            <button id="add"
                onClick={() => {
                    context.add(text)
                    setText("")
                }
                }>Add</button>
        </div>
    )
}