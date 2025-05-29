import { useEffect } from "react";
import TeacherBox from "../teacher-page/TecherBox";
import Heading from "./Heading";
import {useDispatch , useSelector} from "react-redux"
import { fetchMostPobularTeachers } from "../../redux/apiCalls/teacherApiCall";
const Teachers = () => {
    const dispatch = useDispatch();
    const {pobularTeachers} = useSelector(state=>state.teacher);
    useEffect(()=>{
        dispatch(fetchMostPobularTeachers());
    },[])
    return ( 
        <section className="teachers">
        <Heading title={"Most Pobulare Teachers"}/>
        <div className="container">
        {pobularTeachers?.map((t)=>(
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
     );
}
 
export default Teachers;