import { Component } from "react";

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
       this.timerID = setInterval(() =>
    this.tick(), 1000)
    }
    componentWillUnmount() {
        clearTimeout(this.timerID)
    }
    tick(){
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render() {
        return(
            <p>{this.state.time}</p>
        )
    }
}