import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { getSpecializations } from "../../redux/apiCalls/specializationApiCall";
const SpecializationsPage = () => {
    const dispatch=useDispatch();
  const {specializations}=useSelector(state=>state?.specialization);
  useEffect(()=>{
    dispatch(getSpecializations())

  },[])

    return (
      <div className="specializations-page courses-page">
      <div className="image-title">
         <div className="home-hero-header-layout">
            <h1 className="home-title">
                Our <span>Specializations</span>
            </h1>
        </div>
      </div>
      <section className="specializations">
            <div className="container">
               {specializations.map((specialization)=>(
                <div key={specialization?._id} className="box">
                    <div className="box-image">
                        <img src={specialization?.specializationPhoto?.url} alt="" />
                    </div>
                    <div className="box-overlay"></div>
                    <Link to={`/specializations/${specialization?.specializationName}`}>{specialization?.specializationName}</Link>
                </div>
               ))},
                  
            </div>
        </section>
      
    </div>
      );
}
 
export default SpecializationsPage;