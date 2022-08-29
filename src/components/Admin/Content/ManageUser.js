import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="user-content">
                <div>
                    <button>Add new User</button>
                </div>

                <div>
                    Table User
                </div>
                <ModalCreateUser />
            </div>
        </div>
    )
}
export default ManageUser;