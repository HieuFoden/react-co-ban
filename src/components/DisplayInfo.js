import React, { useEffect, useState } from "react";
import './DisplayInfo.scss';
import logo from './../logo.svg';

// class DisplayInfo extends React.Component {
//     render() {
//         console.log(">>> call me render")
//         const { listUsers } = this.props;
//         return (
//             <div className="display-info-container">
//                 {true &&
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 28 ? "green" : "red"}>
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         );
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('>>>call me render')

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You have deleted all the users...')
            }
            console.log('>>>call me useEffect')
        }, [listUsers]
    );

    return (
        <div className="display-info-container">
            <div>
                <button onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide" : "Show"}
                </button>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div key={user.id} className={+user.age > 28 ? "green" : "red"}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
}

export default DisplayInfo