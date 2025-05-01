import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const CoursesTabel = () => {
    const  courses= [
        {
        _id: "6807d40c21d8f38d6b405f5b",
        title: "Web Course",
        description: "Design Course For Biggner",
        user: {
            _id: "6807d3ed21d8f38d6b405f57",
            username: "New Teacher",
            email: "alaa@email.com",
            profilePhoto: {
                url: "https://media.istockphoto.com/id/1389898082/de/foto/s%C3%BC%C3%9Fer-junge-ikonischer-charakter-mit-brille-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=cOl9XSWvShItbtNwlZabaVpW2TQ7Yljx0t-LSaRm4x4=",
                publicId: null
            },
            role: "teacher",
            isAdmin: false,
            isAccountVerified: false,
            phoneNumber: "+963933519382",
            whatsappLink: "link",
            specialization: "67ba0df7b4f995b3d95bd651",
            createdAt: "2025-04-22T17:37:49.656Z",
            updatedAt: "2025-04-27T14:59:40.947Z",
            "__v": 0,
            bio: "I´m New Teacher",
            id: "6807d3ed21d8f38d6b405f57"
        },
        category: "Design",
        image: {
            url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745343499/hi1ld0ggd05s2nkdnxcf.jpg",
            publicId: "hi1ld0ggd05s2nkdnxcf"
        },
        likes: [],
        videos: [
           "6807d43721d8f38d6b405f60"
        ],
        subscribers: [
            "67bb963f1868ccec7f382bbe"
        ],
        favoriteBy: [
            "67bb963f1868ccec7f382bbe"
        ],
        createdAt: "2025-04-22T17:38:20.457Z",
        updatedAt: "2025-04-27T16:41:30.595Z",
        "__v": 3
    },
    {
        _id: "6907d40c21d8f38d6b405f5b",
        title: "PhotoShop Course",
        description: "Design Course For Biggner",
        user: {
            _id: "6807d3ed21d8f38d6b405f57",
            username: "New Teacher",
            email: "alaa@email.com",
            profilePhoto: {
                url: "https://media.istockphoto.com/id/1389898082/de/foto/s%C3%BC%C3%9Fer-junge-ikonischer-charakter-mit-brille-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=cOl9XSWvShItbtNwlZabaVpW2TQ7Yljx0t-LSaRm4x4=",
                publicId: null
            },
            role: "teacher",
            isAdmin: false,
            isAccountVerified: false,
            phoneNumber: "+963933519382",
            whatsappLink: "link",
            specialization: "67ba0df7b4f995b3d95bd651",
            createdAt: "2025-04-22T17:37:49.656Z",
            updatedAt: "2025-04-27T14:59:40.947Z",
            "__v": 0,
            bio: "I´m New Teacher",
            id: "6907d40c21d8f38d6b405f5b"
        },
        category: "Design",
        image: {
            url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745343499/hi1ld0ggd05s2nkdnxcf.jpg",
            publicId: "hi1ld0ggd05s2nkdnxcf"
        },
        likes: [],
        videos: [
           "6807d43721d8f38d6b405f60"
        ],
        subscribers: [
            "67bb963f1868ccec7f382bbe"
        ],
        favoriteBy: [
            "67bb963f1868ccec7f382bbe"
        ],
        createdAt: "2025-04-22T17:38:20.457Z",
        updatedAt: "2025-04-27T16:41:30.595Z",
        "__v": 3
    },
    {
        _id: "6907d40c21d8f38d6b405f5b",
        title: "Math Course",
        description: "Math Course For Biggner",
        user: {
            _id: "6807d3ed21d8f38d6b405f57",
            username: "New Teacher",
            email: "alaa@email.com",
            profilePhoto: {
                url: "https://media.istockphoto.com/id/1389898082/de/foto/s%C3%BC%C3%9Fer-junge-ikonischer-charakter-mit-brille-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=cOl9XSWvShItbtNwlZabaVpW2TQ7Yljx0t-LSaRm4x4=",
                publicId: null
            },
            role: "teacher",
            isAdmin: false,
            isAccountVerified: false,
            phoneNumber: "+963933519382",
            whatsappLink: "link",
            specialization: "67ba0df7b4f995b3d95bd651",
            createdAt: "2025-04-22T17:37:49.656Z",
            updatedAt: "2025-04-27T14:59:40.947Z",
            "__v": 0,
            bio: "I´m New Teacher",
            id: "6907d40c21d8f38d6b405f5b"
        },
        category: "Design",
        image: {
            url: "https://res.cloudinary.com/djzntpxjj/image/upload/v1745343499/hi1ld0ggd05s2nkdnxcf.jpg",
            publicId: "hi1ld0ggd05s2nkdnxcf"
        },
        likes: [],
        videos: [
           "6807d43721d8f38d6b405f60"
        ],
        subscribers: [
            "67bb963f1868ccec7f382bbe"
        ],
        favoriteBy: [
            "67bb963f1868ccec7f382bbe"
        ],
        createdAt: "2025-04-22T17:38:20.457Z",
        updatedAt: "2025-04-27T16:41:30.595Z",
        "__v": 3
    }
]
    // Delete Course Handler
    const deleteCourseHandler=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Course!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Course has been deleted.",
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
                <h1 className="tabel-title">Courses</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Teacher</th>
                            <th>Course Title</th>
                            <th>Likes</th>
                            <th>Favorites</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((item,index)=>(
                            <tr key={item._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <img src="/Images/teacher.jpg" alt="" className="tabel-user-image" />
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
                                {item?.favoriteBy?.length}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={"/courses/details/1"}>View Course</Link>
                                        </button>
                                        <button onClick={deleteCourseHandler}>
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