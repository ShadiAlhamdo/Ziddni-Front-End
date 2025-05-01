import Heading from "./Heading";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Students = () => {
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
        <SwiperSlide>
          <img src="/Images/student.jpg" />
          <div className="info">
            <p className="name">
              Student: <span>Student-Name</span>
            </p>
            <div className="comment">
              Comment,Description
              Comment,Description Comment,DescriptionComment,Description
              Comment,Description Comment,DescriptionComment,Description
              Comment,Description Comment,DescriptionComment,Description
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/student.jpg" />
          <div className="info">
            <p className="name">
              Student: <span>Student-Name</span>
            </p>
            <div className="comment">
              Comment,Description
              Comment,Description Comment,DescriptionComment,Description
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/student.jpg" />
          <div className="info">
            <p className="name">
              Student: <span>Student-Name</span>
            </p>
            <div className="comment">
              Comment,Description
              Comment,Description Comment,DescriptionComment,Description
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/student.jpg" />
          <div className="info">
            <p className="name">
              Student: <span>Student-Name</span>
            </p>
            <div className="comment">
              Comment,Description
              Comment,Description Comment,DescriptionComment,Description
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </section>
     );
}
 
export default Students;