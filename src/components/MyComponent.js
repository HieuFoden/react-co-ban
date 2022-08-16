// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    //JSX

    state = {
        name: 'Hoai Thu',
        age: 27,
        address: 'Hai Duong'
    }

    handleClick(event) {
        console.log('Xin chao...')
        console.log('My name is ', this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;