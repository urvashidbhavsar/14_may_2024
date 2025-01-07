import React from "react"

class Setex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { word: "hello" }
    }

    handleEvent = () => {
        this.setState({ word: "world" })
    }

    render() {
        return (
            <>
                <button onClick={this.handleEvent}>change</button>
                <p>{this.state.word}</p>
            </>
        )
    }
}
export default Setex;