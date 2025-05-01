import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const VideosTabel = () => {
    const Videos=[
        {
            _id: "6807d43721d8f38d6b405f60",
            title: "Video 1 New Test",
            url: "https://res.cloudinary.com/djzntpxjj/video/upload/v1745691202/a3t3kfbghu96xhzwpabz.mp4",
            publicId: "a3t3kfbghu96xhzwpabz",
            image: {
                url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745691056/srrfnmmjf25wcsnlhpsb.webp",
                publicId: "srrfnmmjf25wcsnlhpsb"
            },
            course: {
            _id: "6807d40c21d8f38d6b405f5b",
            title: "Web Course"
        },
            createdAt: "2025-04-22T17:39:03.946Z"
        },
        {
            _id: "6807d43721d8f38d6b405f61",
            title: "Video 2 New Test",
            url: "https://res.cloudinary.com/djzntpxjj/video/upload/v1745691202/a3t3kfbghu96xhzwpabz.mp4",
            publicId: "a3t3kfbghu96xhzwpabz",
            image: {
                url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745691056/srrfnmmjf25wcsnlhpsb.webp",
                publicId: "srrfnmmjf25wcsnlhpsb"
            },
            course: {
            _id: "6807d40c21d8f38d6b405f5b",
            title: "Web Course"
        },
            createdAt: "2025-04-22T17:39:03.946Z"
        },
        {
            _id: "6807d43721d8f38d6b405f62",
            title: "Video 1 New Test",
            url: "https://res.cloudinary.com/djzntpxjj/video/upload/v1745691202/a3t3kfbghu96xhzwpabz.mp4",
            publicId: "a3t3kfbghu96xhzwpabz",
            image: {
                url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745691056/srrfnmmjf25wcsnlhpsb.webp",
                publicId: "srrfnmmjf25wcsnlhpsb"
            },
            course: {
            _id: "6807d40c21d8f38d6b405f5b",
            title: "PhotoShop Course"
        },
            createdAt: "2025-04-22T17:39:03.946Z"
        }
    ]
    // Delete Video Handler
    const deleteVideoHandler=()=>{
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
                <h1 className="tabel-title">Videos</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Course</th>
                            <th>Video Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Videos.map((item,index)=>(
                            <tr key={item._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <span className="tabel-username">{item?.course?.title}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.title}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={"/videos/details/1"}>View Video</Link>
                                        </button>
                                        <button onClick={deleteVideoHandler}>
                                            Delete Video
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
 
export default VideosTabel;