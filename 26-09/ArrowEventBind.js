import React, { Component } from 'react';

class ArrowEventBind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "hello"
        };
    }

    clickHandler = () => {
        this.setState({
            message: "GoodBye"
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        );
    }
}

export default ArrowEventBind;


