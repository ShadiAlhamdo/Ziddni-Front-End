import Courses from "./Courses";
import Services from "./Services";
import Specializations from "./Specializations";
import Students from "./Students";
import Teachers from "./Teachers";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HomePage = () => {
    return ( 
        <section className="home">
            <div className="home-hero-header">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="home-hero-header-layout">
                    <h1 className="home-title">
                        Welcome To <span>Ziddni</span>
                    </h1>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-hero-header-layout">
                    <h1 className="home-title">
                        Welcome To <span>Ziddni</span>
                    </h1>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-hero-header-layout">
                    <h1 className="home-title">
                        Welcome To <span>Ziddni</span>
                    </h1>
                </div>
        </SwiperSlide>
      </Swiper>
                
            </div>
                <Services/>
                <Specializations/>
                <Courses/>
               <Teachers/>
               <Students/>
            
        </section>
     );
}
 
export default HomePage;