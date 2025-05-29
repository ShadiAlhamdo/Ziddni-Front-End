import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCourse, fetchCourses } from "../../redux/apiCalls/courseApiCall";

const CoursesTabel = () => {
    const dispatch = useDispatch();
    const {courses} = useSelector(state=>state.course);
    useEffect(()=>{
        dispatch(fetchCourses());
    },[])
    // Delete Course Handler
    const deleteCourseHandler=async(id)=>{
        const result =await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Course!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          });
            if (result.isConfirmed) {
             await dispatch(deleteCourse(id));
             dispatch(fetchCourses());
            }
          
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Courses</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Teacher</th>
                            <th>Course Title</th>
                            <th>Likes</th>
                            <th>Subsribers</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses?.map((item,index)=>(
                            <tr key={item?._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <img src={item?.image?.url} alt="" className="tabel-user-image" />
                                        <span className="tabel-username">{item?.user?.username}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.title}
                                </td>
                                <td>
                                   {item?.likes?.length}
                                </td>
                                <td>
                                {item?.subscribers?.length}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={`/courses/details/${item?._id}`}>View Course</Link>
                                        </button>
                                        <button onClick={()=>deleteCourseHandler(item._id)}>
                                            Delete Course
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
 
export default CoursesTabel;