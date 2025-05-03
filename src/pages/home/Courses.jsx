import Heading from "./Heading";
import CourseBox from "../course-page/CourseBox";

const Courses  = () => {
    return ( 
        <section className="pobular-course">
                    <Heading title={"Most Pobular Courses"}/>
                    <div className="container">
                    {[1,2,3,4,5,6,7].map((e)=>(
                            <CourseBox/>
                        ))}
                        
                    </div>
                </section>
     );
}
 
export default Courses ;