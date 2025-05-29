import Heading from "./Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {useDispatch,useSelector} from "react-redux";
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect } from "react";
import { FetchLastComments } from "../../redux/apiCalls/commentApiCall";

const Students = () => {
  const dispatch=useDispatch();
  const {comments}=useSelector(state=>state.comment.commentsLast);

  useEffect(()=>{
    dispatch(FetchLastComments());

  },[]);
    return ( 
        <section className="students">
            <Heading title={"What our students say !"}/>
            <div className="container">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {comments?.map((c)=>(
          <SwiperSlide>
          <img src={c?.user?.profilePhoto?.url} alt="" />
          <div className="info">
            <p className="name">
              Student: <span>{c?.user?.username}</span>
            </p>
            <div className="comment">
              {c?.content}
            </div>
          </div>
        </SwiperSlide>
        ))}
        
      </Swiper>
            </div>
        </section>
     );
}
 
export default Students;