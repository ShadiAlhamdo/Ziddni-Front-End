import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const CommentsTabel = () => {
   const comments=[
    {
        _id: "680bb80f4463f32df989b409",
        content: "Shadi Comment",
        user: {
            _id: "67bb963f1868ccec7f382bbe",
            username: "shadi",
            id: "67bb963f1868ccec7f382bbe"
        },
        video: {
            _id: "6807d43721d8f38d6b405f60",
            title: "Video 1 New Test",
            course: {
                _id: "6807d40c21d8f38d6b405f5b",
                title: "Web Course"
            }
        },
        createdAt: "2025-04-25T16:27:59.817Z",
        updatedAt: "2025-04-25T16:27:59.817Z",
        "__v": 0
    },
    {
        _id: "680bb7024463f32df989b3fb",
        content: "New Comment",
        user: {
            _id: "67bb963f1868ccec7f382bbe",
            username: "shadi",
            id: "67bb963f1868ccec7f382bbe"
        },
        video: {
            _id: "6807d43721d8f38d6b405f60",
            title: "Video 1 New Test",
            course: {
                _id: "6807d40c21d8f38d6b405f5b",
                title: "Web Course"
            }
        },
        createdAt: "2025-04-25T16:23:30.961Z",
        updatedAt: "2025-04-25T16:23:30.961Z",
        "__v": 0
    }
]
    // Delete Comment Handler
    const deleteCommentHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Comment!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Comment has been deleted.",
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
                <h1 className="tabel-title">Comments</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User Name</th>
                            <th>Course Title</th>
                            <th>Video Title</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((item,index)=>(
                            <tr key={item._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <span className="tabel-username">{item?.user?.username}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.video?.course?.title}
                                </td>
                                <td>
                                {item?.video?.title}
                                </td>
                                <td>
                                {item?.content}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                       
                                        <button onClick={deleteCommentHandler}>
                                            Delete Comment
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
 
export default CommentsTabel;