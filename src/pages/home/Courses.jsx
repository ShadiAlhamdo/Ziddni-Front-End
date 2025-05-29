import Heading from "./Heading";
import CourseBox from "../course-page/CourseBox";
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { fetchCourses, fetchPobularCourses, ToggelFavoriteCourse, ToggelSubscribeCourse } from "../../redux/apiCalls/courseApiCall";
import DateChange from "../../components/Date/DateChange";
import { Link } from "react-router-dom";
const Courses  = () => {
    const dispatch=useDispatch();
    const {pobularCourse}=useSelector(state=>state.course);
    const {user} = useSelector(state=> state.auth);

    const [popular,setPopular] = useState(true);
    useEffect(()=>{
        dispatch(fetchCourses({popular}));
    },[])
   const Subscribe = async (courseId) => {
       await dispatch(ToggelSubscribeCourse(courseId)); // انتظر الانتهاء
       dispatch(fetchCourses({popular}));  // ثم جلب الكورسات المحدثة
   }
   
   // Handel Favorite
   const Favorite = async (courseId) => {
       await dispatch(ToggelFavoriteCourse(courseId));  // انتظر الانتهاء
       dispatch(fetchCourses({popular}));  // ثم جلب الكورسات المحدثة
   }
    return ( 
        <section className="pobular-course ">
                    <Heading title={"Most Pobular Courses"}/>
                    <div className="container jc-center">
                    {pobularCourse?.map((course)=>(
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
                    <button onClick={()=>Subscribe(course?._id)}   className={course?.subscribers?.includes(user?._id)
                                    ? "display-none":"register-course"
                                }>
                    Register for the course
                    </button>
                    <button onClick={()=>Favorite(course?._id)} className={course?.favorites?.includes(user?._id)
                                    ? "display-none":"favorite-course"
                                }>
                        Add Course To Favorite
                    </button>
                </div>
                <div className="flex">
                <span className="rel">
                    <img src="/icons/community.ico" alt="" />:{course?.subscribers?.length}
                </span>
                <span className="like">
                    <img src="/icons/like.png" alt="" />:{course?.likes?.length}
                </span>
                </div>
            
            </div>
                            </div>
                        ))}
                        
                    </div>
                </section>
     );
}
 
export default Courses ;