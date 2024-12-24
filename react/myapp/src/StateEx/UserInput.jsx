import React from "react"
class UserInput extends React.Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }
    handleEvent = (e) => {
        this.setState({ username: e.target.value })
        // console.log(e.target.value)
    }
    render() {
        return (
            <>
                <input type="text" name="username" id="" onChange={this.handleEvent} />
                <p>User is : {this.state.username}</p>
            </>
        )
    }
}
export default UserInput

// npm create-react-app myapp
// npm start