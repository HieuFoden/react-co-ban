// class component
// function component
import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUser from "./AddUser";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: "HieuFoden mc", age: "30" },
//             { id: 2, name: "Hoai Thu", age: "28" },
//             { id: 3, name: "Phuong Xuan", age: "26" }
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.listUsers;
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUserClone
//         })
//     }

//     //JSX
//     //DRY : don`t repeat yourself
//     render() {

//         return (
//             <>
//                 <div className="a">
//                     <AddUser
//                         handleAddNewUser={this.handleAddNewUser} />
//                     <br /><br />
//                     <DisplayInfo
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser} />
//                 </div>

//                 <div className="b">

//                 </div>
//             </>

//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "HieuFoden mc", age: "30" },
            { id: 2, name: "Hoai Thu", age: "28" },
            { id: 3, name: "Phuong Xuan", age: "26" }
        ]
    );



    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
        //         this.setState({
        //             listUsers: [userObj, ...this.state.listUsers]
        //         })
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers(listUserClone)
        // this.setState({
        //     listUsers: listUserClone
        // })
    }

    return (
        <>
            <div className="a">
                <AddUser
                    handleAddNewUser={handleAddNewUser} />
                <br /><br />
                <DisplayInfo
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser} />
            </div>

            <div className="b">

            </div>
        </>
    )
}

export default MyComponent;