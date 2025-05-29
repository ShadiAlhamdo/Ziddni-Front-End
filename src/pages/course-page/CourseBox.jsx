import { Link } from "react-router-dom";
import DateChange from "../../components/Date/DateChange"
import { useSelector , useDispatch } from "react-redux";
import { fetchCourses, fetchCoursesBaseOnCategory, ToggelFavoriteCourse, ToggelSubscribeCourse } from "../../redux/apiCalls/courseApiCall";
import { useEffect, useState } from "react";
const CourseBox = ({course ,currentPage ,category}) => {
    const dispatch = useDispatch();
    const {user} = useSelector(state=> state.auth);
    const [courseId,setCourseId] = useState("");
    useEffect(()=>{
       setCourseId(course?._id);
    },[user]);
    

    const Subscribe=(courseId)=>{
        console.log(currentPage)
        dispatch(ToggelSubscribeCourse(courseId ));
        dispatch(fetchCoursesBaseOnCategory(category));
        dispatch(fetchCourses(currentPage));
    }
    const Favorite = (courseId)=>{
        dispatch(ToggelFavoriteCourse(courseId));
    }

    return ( 
        <div className="box">
        <span className="course-category">{course?.category} </span>
            <div className="box-image">
                <img src={`${course?.image?.url}`} alt="" />
            </div>
            <div className="box-text">
                <div className="title-date">
                    <h4>{course?.title}</h4>
                    <span><DateChange date={course?.createdAt}/> </span>
                </div>
            
                <p className="description">
                    {course?.description}
                </p>
                <div className="buttons">
                    <Link to={`/courses/details/${course?._id}`} className="readmore-course">
                    Read More...
                    </Link>
                    <button onClick={()=>Subscribe(courseId)}   className={course?.subscribers?.includes(user?._id)
                                    ? "display-none":"register-course"
                                }>
                    Register for the course
                    </button>
                    <button className="favorite-course">
                        Add Course To Favorite
                    </button>
                </div>
                <div className="flex">
                <span className="rel">
                    <img src="/icons/community.ico" alt="" />:{course?.likes?.length}
                </span>
                <span className="like">
                    <img src="/icons/like.png" alt="" />:{course?.subscribers?.length}
                </span>
                </div>
            
            </div>
         </div>
     );
}
 
export default CourseBox;