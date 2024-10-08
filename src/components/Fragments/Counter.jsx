import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        this.setState({counter: 10})
    }

    componentDidUpdate(prevProps, prevState) {
        console.info('componentDidUpdate')

        if (this.state.counter === 10) {
            this.setState({counter: 0})
        }
    }

    render () {
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.counter}</h1>
                <button className="bg-black text-white p-3" onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
            </div>
        )
    }
}

export default Counter;