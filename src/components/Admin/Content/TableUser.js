import axios from "axios";

const TableUser = (props) => {

    const { listUser } = props;

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        {/* <th scope="col">Image</th> */}
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <th scope="row">{item.id}</th>
                                    {/* <td>{`data:image/jpeg;base64,${item.image}`}</td> */}
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => props.handClickBtnView(item)}>
                                            View</button>
                                        <button
                                            className="btn btn-success mx-3"
                                            onClick={() => props.handClickBtnUpdate(item)}>
                                            Update</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => props.handleClickBtnDelete(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                    {listUser && listUser.length === 0 && <tr>
                        <td colSpan={'4'} align='center'>Not Found User</td>
                    </tr>}
                </tbody>
            </table>
        </>
    )
};

export default TableUser;