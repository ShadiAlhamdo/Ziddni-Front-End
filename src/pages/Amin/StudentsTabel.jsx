import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const StudentsTabel = () => {

    // Delete User Handler
    const deleteUserHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this User!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
                confirmButtonColor: "#040734",
              });
            }else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Something Wrong :)",
                    icon: "error"
                });
                }
          });
    }
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
                        {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <tr key={item}>
                                <td>{item}</td>
                                <td>
                                    <div className="tabel-image">
                                        <img src="/Images/teacher.jpg" alt="" className="tabel-user-image" />
                                        <span className="tabel-username">Shadi Alhamdo</span>
                                    </div>
                                   
                                </td>
                                <td>
                                    shadi@email.com
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={"/profile/1"}>view Profile</Link>
                                        </button>
                                        <button onClick={deleteUserHandler}>
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