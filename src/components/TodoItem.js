import React from "react"

class TodoItem extends React.Component {
    render() {
        return <li>
                 <input
                   type="checkbox"
                   checked={this.props.todo}
                   onChange={() => console.log("clicked")}
                  />
               </li>
    }
}

export default TodoItem