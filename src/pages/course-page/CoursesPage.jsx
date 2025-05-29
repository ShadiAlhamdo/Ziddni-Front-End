import { useEffect, useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { fetchCourses, getCoursesCount, ToggelFavoriteCourse, ToggelSubscribeCourse } from "../../redux/apiCalls/courseApiCall";
import CourseBox from "./CourseBox";
import {useDispatch, useSelector} from "react-redux";
import CategorySideBar from "../../components/CategorySidebar/CategorySidebar";
import { Link } from "react-router-dom";
import DateChange from "../../components/Date/DateChange";

const CoursesPage = () => {
    const COURSE_PER_PAGE=4;
    const [currentPage,setCurrentPage]=useState(1);
    const dispatch=useDispatch();
    const {courses}=useSelector(state=>state.course);
    const {coursesCount}=useSelector(state=>state.course);
    const {user} = useSelector(state=> state.auth);

    
    const pages=Math.ceil(coursesCount / COURSE_PER_PAGE);




    useEffect(()=>{
    
        dispatch(fetchCourses({pageNumber:currentPage}));
       
    },[currentPage]);

    useEffect(()=>{
        dispatch(getCoursesCount())
    });

    // Handel Subscribe
    const Subscribe=(courseId)=>{
            dispatch(ToggelSubscribeCourse(courseId,currentPage ));
          
        }
    // Handel Favorite
    const Favorite = (courseId)=>{
        dispatch(ToggelFavoriteCourse(courseId));
    }
 // Handel Search Courses
 const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce بعد التوقف عن الكتابة بـ 500ms
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500); // تأخير 0.5 ثانية

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // تنفيذ البحث عندما يتغير النص المؤخر
  useEffect(() => {
    dispatch(fetchCourses({ search: debouncedSearch }));
  }, [debouncedSearch, dispatch]);



    return (
        <div className="courses-page pobular-course">
          <div className="image-title">
             <div className="home-hero-header-layout">
                <h1 className="home-title">
                    Our <span>Courses</span>
                </h1>
            </div>
          </div>
          <section className="pobular-course">
                     <form className="courses-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-field">
                            <label htmlFor="search">
                            <img src="/icons/search.png" alt="search icon" />
                            </label>
                            <input
                            type="search"
                            name="search"
                            id="search"
                            placeholder="Type Here For Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                     </form>
                </section>
                
                <section className="section-course-list">
                    <CategorySideBar/>
                    <div className="container">
                    
                {courses?.length===0?<p className="Not-Found-p">Course Not Found 0_0</p>:courses?.map((c)=>(
                        <div className="box">
                    <span className="course-category">{c?.category} </span>
                        <div className="box-image">
                            <img src={`${c?.image?.url}`} alt="" />
                        </div>
                        <div className="box-text">
                            <div className="title-date">
                                <h4>{c?.title}</h4>
                                <span><DateChange date={c?.createdAt}/> </span>
                            </div>
                        
                            <p className="description">
                                {c?.description}
                            </p>
                            <div className="buttons">
                                <Link to={`/courses/details/${c?._id}`} className="readmore-course">
                                Read More...
                                </Link>
                                <button onClick={()=>Subscribe(c?._id)}   className={
                                                    user && c?.subscribers?.includes(user._id)
                                                    ? "display-none"
                                                    : "register-course"
                                                }>
                                Register for the course
                                </button>
                                <button onClick={()=>Favorite(c?._id)} className={
                                                    user && c?.favorites?.includes(user._id)
                                                    ? "display-none"
                                                    : "favorite-course"
                                                }>
                                    Add Course To Favorite
                                </button>
                            </div>
                            <div className="flex">
                            <span className="rel">
                                <img src="/icons/community.ico" alt="" />:{c?.subscribers?.length}
                            </span>
                            <span className="like">
                                <img src="/icons/like.png" alt="" />:{c?.likes?.length}
                            </span>
                            </div>
                        
                        </div>
                        </div>
                        ))}
                        
                    </div>
                </section>
                <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
      );
}
 
export default CoursesPage;