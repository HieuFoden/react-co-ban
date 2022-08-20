import React, { useState } from "react";

// class AddUser extends React.Component {

//     state = {
//         name: '',
//         age: '',
//         address: 'Hai Duong'
//     }

//     handleOnChangeInput = (event) => {

//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100) + 1 + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name : </label>
//                     <input type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangeInput(event)}

//                     />

//                     <label>Your age : </label>
//                     <input type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }

// }

const AddUser = (props) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('Hai Duong');
    // state = {
    //     name: '',
    //     age: '',
    //     address: 'Hai Duong'
    // }

    const handleOnChangeInput = (event) => {
        // console.log('>>>check target', event.target)
        setName(event.target.value);
        // this.setState({
        //     name: event.target.value
        // })
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
        // this.setState({
        //     age: event.target.value
        // })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + '-random',
            name: name,
            age: age
        })
    }

    return (
        <div>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name : </label>
                <input type="text"
                    value={name}
                    onChange={(event) => handleOnChangeInput(event)}

                />

                <label>Your age : </label>
                <input type="text"
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUser;