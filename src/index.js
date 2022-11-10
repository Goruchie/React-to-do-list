import React from "react"
import ReactDOM from "react-dom"
//comportent file
import TodoContainer from "./components/TodoContainer"

ReactDOM.render(
    <React.StrictMode >
        <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
)

// ReactDOM.render(<TodoContainer />, document.getElementById("root"))