// class component
// function component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfo = ['sa', 'as', 'qw']
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo name="HieuFoden mc" age="30" />
                <hr />
                <DisplayInfo name="Duong Thi Hoai Thu" age={27} myInfo={myInfo} />
            </div>

        );
    }
}

export default MyComponent;