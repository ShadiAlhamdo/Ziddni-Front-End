import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile, getAllTeachersProfiles } from "../../redux/apiCalls/profileApiCall";
import { useEffect } from "react";

const TeachersTabel = () => {
    const dispatch = useDispatch();
    const {teachersProfiles} = useSelector(state=>state.profile); 
    useEffect(()=>{
        dispatch(getAllTeachersProfiles());
    },[])
    // delete User Handler 
    const deleteUserHandler = async (id) => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this User!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#040734",
        confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
        await dispatch(deleteProfile(id));
        dispatch(getAllTeachersProfiles());
    }
};
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Teachers</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Teacher</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachersProfiles?.map((item,ind)=>(
                            <tr key={item?._id}>
                                <td>{ind + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <img src={item?.profilePhoto?.url} alt="" className="tabel-user-image" />
                                        <span className="tabel-username">{item?.username}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.email}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={`/profile/teacher/${item?._id}`}>view Profile</Link>
                                        </button>
                                        <button onClick={()=>deleteUserHandler(item?._id)}>
                                            Delete User
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
     );
}
 
export default TeachersTabel;