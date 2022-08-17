import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Hoai Thu',
        age: 27,
        address: 'Hai Duong'
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

    }


    render() {
        return (
            <div>
                私は {this.state.name} 今年 {this.state.age} 歳です。
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name : </label>
                    <input type="text" value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age : </label>
                    <input type="text" value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}
export default UserInfo;