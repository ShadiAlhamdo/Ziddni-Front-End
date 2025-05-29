import { useEffect } from "react";
import TeacherBox from "./TecherBox";
import {useDispatch,useSelector} from "react-redux"
import { fetchAllTeachers } from "../../redux/apiCalls/teacherApiCall";

const TeahersPage = () => {
    const dispatch = useDispatch();
    const {teachers} = useSelector(state=>state.teacher);

    useEffect(()=>{
        dispatch(fetchAllTeachers());
    },[]);

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
        <div className="container">
           {teachers?.map((t)=>(
            <TeacherBox key={t?._id} 
                                    username={t?.username}
                                    bio={t?.bio}
                                    id={t?._id}
                                    createdAt={t?.createdAt}
                                    profilePhoto={t?.profilePhoto}
                                    specialization={t?.specialization?.specializationName}/>
           ))}
        </div>
          
            
        
    </section>
        
      </div>
     );
}
 
export default TeahersPage;