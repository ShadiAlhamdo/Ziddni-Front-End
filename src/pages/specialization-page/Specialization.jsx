
import './Specialization.css'
import { useParams,Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import TeacherBox from '../teacher-page/TecherBox';
import { getTeacherSpecial } from '../../redux/apiCalls/teacherApiCall';


const Specialization = () => {
   
    const{specializationName}=useParams();
    const dispatch=useDispatch();
    const {teachersSpecial}=useSelector(state=>state.teacher);

    useEffect(()=>{
        dispatch(getTeacherSpecial(specializationName));
        window.scrollTo(0,0)
    },[specializationName]);


    return ( 
        <section className="category teachers">
            {teachersSpecial?.length===0 ?
            <>
                <h1 className="category-not-found">
                    Teachers With
                     <span>{" "+specializationName+" "}</span>
                      Teachers Not Found
                    <Link to="/specializations" className='category-not-found-link'> Go To Specializations Page</Link>
                </h1>

            </>
            :
            <>
                <h1 className="category-title">Teachers Based On <span>{specializationName}</span></h1>
                <div className="container">
                    {teachersSpecial?.map((t)=>(
                        <TeacherBox key={t?._id} 
                                    username={t?.username}
                                    bio={t?.bio}
                                    id={t?._id}
                                    createdAt={t?.createdAt}
                                    profilePhoto={t?.profilePhoto}
                                    specialization={t?.specialization?.specializationName}

                        />
                    ))}
                    
                </div>
            </>
            }
          
        </section>
     );
}
 
export default Specialization;