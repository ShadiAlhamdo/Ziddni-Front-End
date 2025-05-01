import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const AnswersTabel = () => {
   const answers=  [
    {
        _id: "67c5058d448a20d67d9bc1a5",
        content: "Answer From Fadi",
        user: {
            _id: "67c4fac7d1e843c2c6c7c5a4",
            username: "Fadi Alhamdo",
            profilePhoto: {
                url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1740962931/sfm7u94y5terc5z5g81d.jpg",
                publicId: "sfm7u94y5terc5z5g81d"
            },
            id: "67c4fac7d1e843c2c6c7c5a4"
        },
        question: {
            _id: "67c504e0448a20d67d9bc19d",
            content: "Update New Question From fadi"
        },
        createdAt: "2025-03-03T01:27:41.629Z",
        updatedAt: "2025-03-03T01:27:41.629Z",
        "__v": 0
    }
]
    // Delete Answer Handler
    const deleteAnswerHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Answer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Answer has been deleted.",
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
                <h1 className="tabel-title">Answers</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User Name</th>
                            <th>Answer</th>
                            <th>Question</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {answers.map((item,index)=>(
                            <tr key={item._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <span className="tabel-username">{item?.user?.username}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.content}
                                </td>
                                <td>
                                   {item?.question?.content}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                       
                                        <button onClick={deleteAnswerHandler}>
                                            Delete Answer
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
 
export default AnswersTabel;