import TeacherBox from "./TecherBox";

const TeahersPage = () => {
    return ( 
        <div className="teachers-page courses-page ">
        <div className="image-title">
           <div className="home-hero-header-layout">
              <h1 className="home-title">
                  Our <span>Teachers</span>
              </h1>
          </div>
        </div>
        <section className="teachers">
        <form className="teachers-form courses-form">
                        <div className="input-field">
                            <label for="cars">Choose a Specializations:</label>
                            <select name="cars" id="cars">
                                <option disabled defaultChecked value="volvo">All</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
        </form>
        <div className="container">
           {[1,2,3,4,5,6,7,8].map((e)=>(
            <TeacherBox/>
           ))}
        </div>
          
            
        
    </section>
        
      </div>
     );
}
 
export default TeahersPage;