import { useState } from "react"

type AddTodoProps = {
    add: (text: string) => void
}

export function AddTodo({ add }: AddTodoProps) {
    const [text, setText] = useState("")

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            add(text)
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
                    add(text)
                    setText("")
                }
                }>Add</button>
        </div>
    )
}