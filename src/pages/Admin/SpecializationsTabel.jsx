import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const SpecializationsTabel = () => {
    const Specializations=[
        {
            "_id": "67ba0f06cf1c261aaa81a3a1",
            "specializationName": "Web Developer New",
            "specializationPhoto": {
                "url": "https://res.cloudinary.com/djzntpxjj/image/upload/v1745955229/treb54odlqgmorvqvfxg.webp",
                "publicId": "treb54odlqgmorvqvfxg"
            },
            "__v": 0
        },
        {
            "_id": "67ba17976464f481c175cd61",
            "specializationName": "Design",
            "specializationPhoto": {
                "url": "https://media.istockphoto.com/id/2185390900/de/foto/night-work-ai-avatar-coding.jpg?s=2048x2048&w=is&k=20&c=TgK3-zIX_GJOBfzz58kQovBbaAdPbkshP-QW-MYO_gU=",
                "publicId": null
            },
            "__v": 0
        }
    ]
    // Delete Specialization Handler
    const deleteSpecializationHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Video!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Video has been deleted.",
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
                <h1 className="tabel-title">Specializations</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Specializations Image</th>
                            <th>Specialization Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Specializations.map((item,index)=>(
                            <tr key={index }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <img src="/Images/specializations.jpg"  className="tabel-specializations-image" alt="" />
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.specializationName}
                                </td>
                                <td>
                                
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={"/specialization/details/1"}>View Specialization</Link>
                                        </button>
                                        <button onClick={deleteSpecializationHandler}>
                                            Delete Specialization
                                        </button>
                                       
                                    </div>
                                    <div className="tabel-update-group">
                                        <button className="tabel-update-btn" >
                                            Update Specialization
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
 
export default SpecializationsTabel;