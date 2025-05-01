import { Link } from "react-router-dom";

const AdminSideBar = () => {
    return ( 
        <div className="admin-sidebar">
            <Link to={"/admin-dashboard"} className="admin-sidebar-title">
                <img src="./icons/dashboard.png" alt="" className="dashboard-icon" />
                Dashboard
            </Link>
            <ul className="admin-dashboard-list">
                <Link className="admin-sidebar-link" to={"/admin-dashboard/teachers-tabel"} >
                    <img src="./icons/group.png" alt="" className="dashboard-icon" />
                    Teachers
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/students-tabel"} >
                    <img src="./icons/group.png" alt="" className="dashboard-icon" />
                    Students
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/courses-tabel"} >
                    <img src="./icons/online-course.png" alt="" className="dashboard-icon" />
                    Courses
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/videos-tabel"} >
                    <img src="./icons/multimedia.png" alt="" className="dashboard-icon" />
                    videos
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/specializations-tabel"} >
                    <img src="./icons/breakout-room.png" alt="" className="dashboard-icon" />
                    Specializations
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/categories-tabel"} >
                    <img src="./icons/categories.png" alt="" className="dashboard-icon" />
                    categories
                </Link>
                <Link className="admin-sidebar-link" to={"/admin-dashboard/comments-tabel"} >
                    <img src="./icons/comments.png" alt="" className="dashboard-icon" />
                    Comments
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/questions-tabel"} >
                    <img src="./icons/questions.png" alt="" className="dashboard-icon" />
                    Questions
                </Link>
                <Link  className="admin-sidebar-link" to={"/admin-dashboard/answers-tabel"} >
                    <img src="./icons/question.png" alt="" className="dashboard-icon" />
                    Answers
                </Link>
                
                
               
                
            </ul>
        </div>
     );
}
 
export default AdminSideBar;