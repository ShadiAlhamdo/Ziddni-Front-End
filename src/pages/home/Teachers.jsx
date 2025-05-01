import TeacherBox from "../teacher-page/TecherBox";
import Heading from "./Heading";

const Teachers = () => {
    return ( 
        <section className="teachers">
        <Heading title={"Most Pobulare Teachers"}/>
        <div className="container">
        {[1,2,3,4].map((e)=>(
            <TeacherBox/>
           ))}
        </div>
          
            
        
    </section>
     );
}
 
export default Teachers;