import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { deleteProfile, getAllStudentsProfiles } from "../../redux/apiCalls/profileApiCall";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentsTabel = () => {
  const dispatch = useDispatch();
    const {studentsProfiles} = useSelector(state=>state.profile); 
    useEffect(()=>{
        dispatch(getAllStudentsProfiles());
    },[])
    // Delete User Handler
    const deleteUserHandler = async (id) => {
    const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this User!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#040734",
        confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
        await dispatch(deleteProfile(id));
        dispatch(getAllStudentsProfiles());
    }
   };

    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Students</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Student</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsProfiles?.map((item,ind)=>(
                            <tr key={item?._id}>
                                <td>{ind +1}</td>
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
                                            <Link to={`/profile/student/${item?._id}`}>view Profile</Link>
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
 
export default StudentsTabel;