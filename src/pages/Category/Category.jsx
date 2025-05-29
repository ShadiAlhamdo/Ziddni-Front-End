
import './Category.css'
import { useParams,Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import CourseBox from '../course-page/CourseBox';
import { fetchCourses, fetchCoursesBaseOnCategory, ToggelFavoriteCourse, ToggelSubscribeCourse } from '../../redux/apiCalls/courseApiCall';
import DateChange from '../../components/Date/DateChange';


const Category = () => {
    const dispatch=useDispatch();
    const {courses}=useSelector(state=>state.course.coursesCate);
    const {user} = useSelector(state=> state.auth);

    const{category}=useParams()
   

    useEffect(()=>{
     dispatch(fetchCoursesBaseOnCategory(category))
        window.scrollTo(0,0)
    },[category]);

// Handel Subscribe
const Subscribe = async (courseId) => {
    await dispatch(ToggelSubscribeCourse(courseId)); // انتظر الانتهاء
    dispatch(fetchCoursesBaseOnCategory(category));  // ثم جلب الكورسات المحدثة
}

// Handel Favorite
const Favorite = async (courseId) => {
    await dispatch(ToggelFavoriteCourse(courseId));  // انتظر الانتهاء
    dispatch(fetchCoursesBaseOnCategory(category));  // ثم جلب الكورسات المحدثة
}

    return ( 
        <section className="category pobular-course">
            {courses?.length===0 ?
            <>
                <h1 className="category-not-found">
                    Courses With
                     <span>{" "+category+" "}</span>
                      Category Not Found
                    <Link to="/courses" className='category-not-found-link'> Go To Courses Page</Link>
                </h1>

            </>
            :
            <>
                <h1 className="category-title">Posts Based On <span>{category}</span></h1>
                <div className="container">
                    {courses?.map((course)=>(
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
            </>
            }
          
        </section>
     );
}
 
export default Category;