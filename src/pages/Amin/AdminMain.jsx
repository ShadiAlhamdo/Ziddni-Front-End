import { Link } from "react-router-dom";
import AddCategoryForm from "./AddCategoryForm";
import AddSpecializationForm from "./AddSpecializationForm";

const AdminMain = () => {
    return ( 
        <div className="admin-main">
            <div className="admin-main-header">
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Teachers
                    </h5>
                    <div className="admin-card-count">46</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/teachers-tabel"} className="admin-card-link">
                            See All Teachers
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/group.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Student
                    </h5>
                    <div className="admin-card-count">260</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/students-tabel"} className="admin-card-link">
                            See All Students
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/group.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Courses
                    </h5>
                    <div className="admin-card-count">188</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/courses-tabel"} className="admin-card-link">
                            See All Courses
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/online-course.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Videos
                    </h5>
                    <div className="admin-card-count">364</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/videos-tabel"} className="admin-card-link">
                            See All Videos
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/multimedia.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                    Specializations
                    </h5>
                    <div className="admin-card-count">7</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/specializations-tabel"} className="admin-card-link">
                            See All Specializations
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/breakout-room.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Categories
                    </h5>
                    <div className="admin-card-count">7</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/categories-tabel"} className="admin-card-link">
                            See All Categories
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/categories.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Comments
                    </h5>
                    <div className="admin-card-count">279</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/comments-tabel"} className="admin-card-link">
                            See All Comments
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/comments.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Questions
                    </h5>
                    <div className="admin-card-count">83</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/questions-tabel"} className="admin-card-link">
                            See All Questions
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/questions.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">
                        Answers
                    </h5>
                    <div className="admin-card-count">160</div>
                    <div className="admin-card-link-wrapper">
                        <Link to={"/admin-dashboard/answers-tabel"} className="admin-card-link">
                            See All Answers
                        </Link>
                        <div className="admin-card-icon">
                            <img src="/icons/question.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <AddCategoryForm/>
            <AddSpecializationForm/>
        </div>
     );
}
 
export default AdminMain;