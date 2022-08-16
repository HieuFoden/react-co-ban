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


    render() {
        return (
            <div>
                My name is {this.state.name} from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;