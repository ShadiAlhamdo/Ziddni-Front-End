import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const QuestionsTabel = () => {
   const questions= [
    {
        _id: "67c504e0448a20d67d9bc19d",
        content: "Update New Question From fadi",
        user: {
            _id: "67c4fac7d1e843c2c6c7c5a4",
            username: "Fadi Alhamdo",
            profilePhoto: {
                url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1740962931/sfm7u94y5terc5z5g81d.jpg",
                publicId: "sfm7u94y5terc5z5g81d"
            },
            id: "67c4fac7d1e843c2c6c7c5a4"
        },
        createdAt: "2025-03-03T01:24:48.490Z",
        updatedAt: "2025-03-03T01:26:03.791Z",
        "__v": 0
    },
    {
        _id: "67c504e0448a20d67d9bc19d",
        content: " Question From shadi",
        user: {
            _id: "67c4fac7d1e843c2c6c7c5a4",
            username: "shadi Alhamdo",
            profilePhoto: {
                url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1740962931/sfm7u94y5terc5z5g81d.jpg",
                publicId: "sfm7u94y5terc5z5g81d"
            },
            id: "67c4fac7d1e843c2c6c7c5a4"
        },
        createdAt: "2025-03-03T01:24:48.490Z",
        updatedAt: "2025-03-03T01:26:03.791Z",
        "__v": 0
    }
]
    // Delete Question Handler
    const deleteQuestionHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Question!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Question has been deleted.",
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
                <h1 className="tabel-title">Questions</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User Name</th>
                            <th>Question</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((item,index)=>(
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
                                    <div className="tabel-butoon-group">
                                       
                                        <button onClick={deleteQuestionHandler}>
                                            Delete Question
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
 
export default QuestionsTabel;