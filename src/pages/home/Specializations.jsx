import { useEffect } from "react";
import Heading from "./Heading";
import {useDispatch,useSelector} from "react-redux"
import { getPobularSpecializations } from "../../redux/apiCalls/specializationApiCall";
import { Link } from "react-router-dom";
const Specializations = () => {
    const dispatch = useDispatch();
    const {pobularSpecializations} = useSelector(state=>state.specialization);

    useEffect(()=>{
        dispatch(getPobularSpecializations());
    },[])
    return ( 
        <section className="specializations">
            <Heading title={"The most popular specialties"}/>
            <div className="container">
                {pobularSpecializations?.map((s)=>(
                    <div className="box">
                    <div className="box-image">
                        <img src={s?.specializationPhoto?.url} alt="" />
                    </div>
                    <div className="box-overlay"></div>
                    <Link to={`/specializations/${s?.specializationName}`}>{s?.specializationName}</Link>
                </div>
                ))}
                
            </div>
        </section>
     );
}
 
export default Specializations;