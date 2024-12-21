import React from "react";

class StateEx extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "red"
        }
    }
    handleEvent = () => {
        this.setState({ color: "blue" })
        console.log("Hello")
    }
    render() {
        return (
            <>
                <button onClick={this.handleEvent}>Click me</button>
                <p>{this.state.color}</p>
            </>
        );
    }
}
export default StateEx;