import { Link } from "react-router-dom";

const CourseBox = () => {
    return ( 
        <div className="box">
                                <span className="course-category">programming </span>
                                    <div className="box-image">
                                        <img src="/Images/React Course.jpg" alt="" />
                                    </div>
                                    <div className="box-text">
                                        <div className="title-date">
                                            <h4>Title COurse Name</h4>
                                            <span>2025/10/10</span>
                                        </div>
                                    
                                        <p className="description">
                                            Dsecription,text Dsecription
                                            Dsecription,Dsecription,Dsecription,
                                            Dsecription,Dsecription,Dsecription,
                                            Dsecription,Dsecription,Dsecription,
                                            Dsecription,Dsecription,Dsecription,
                                            Dsecription,Dsecription,Dsecription
                                        </p>
                                        <div className="buttons">
                                            <Link to={"/courses/details/1"} className="readmore-course">
                                            Read More...
                                            </Link>
                                            <button className="register-course">
                                            Register for the course
                                            </button>
                                            <button className="favorite-course">
                                                Add Course To Favorite
                                            </button>
                                        </div>
                                        <div className="flex">
                                        <span className="rel">
                                            <img src="/icons/community.ico" alt="" />:5 
                                        </span>
                                        <span className="like">
                                            <img src="/icons/like.png" alt="" />:15
                                        </span>
                                        </div>
                                    
                                    </div>
         </div>
     );
}
 
export default CourseBox;