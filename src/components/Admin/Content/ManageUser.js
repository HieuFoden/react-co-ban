import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalViewUser from "./ModalViewUser";


const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [dataUpdate, setDataUpdate] = useState({});
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    };

    useEffect(() => {
        fetchListUsers();
    }, []);

    const handClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const resetUpdateData = () => {
        setDataUpdate({});
    }

    const handClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataView(user);
    };

    const handleClickBtnDelete = (user) => {
        console.log('>>>user delete : ', user)
        setShowModalDeleteUser(true);
        setDataDelete(user);
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><FcPlus />Add new User</button>
                </div>

                <div className="table-users-container">
                    <TableUser
                        listUser={listUser}
                        handClickBtnUpdate={handClickBtnUpdate}
                        handClickBtnView={handClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataView={dataView}
                />

                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;