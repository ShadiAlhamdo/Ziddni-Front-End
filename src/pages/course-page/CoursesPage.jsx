import Pagination from "../../components/pagination/Pagination";
import CourseBox from "./CourseBox";

const CoursesPage = () => {
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
                    <form className="courses-form">
                        <div className="input-field">
                            <label htmlFor="search">
                                <img src="/icons/search.png" alt="" />
                            </label>
                            <input type="search" name="search" id="search" placeholder="Type Here For Search"/>
                        </div>
                        
                        <div className="input-field">
                        <label for="cars">Choose a category:</label>
                        <select name="cars" id="cars">
                            <option disabled defaultChecked value="volvo">All</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        </div>

                    </form>
                </section>
                <div className="container">
                        {[1,2,3,4,5,6,7].map((e)=>(
                            <CourseBox/>
                        ))}
                        
                    </div>
                <Pagination/>
        </div>
      );
}
 
export default CoursesPage;