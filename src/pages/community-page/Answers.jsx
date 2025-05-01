import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Answers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // [] معناها تعمل مرة واحدة عند التحميل
      
 const [content,setContent]=useState("");
    const formSubmitHandler=(e)=>{
        e.preventDefault();

        if(content.trim()==="") return toast.error("The Answe Content Is Required");

        console.log(content)
    }
    
    return ( <div className="community-page answer-page courses-page">
        <ToastContainer theme="colored" position="top-center"/>
        <div className="image-title">
           <div className="home-hero-header-layout">
              <h1 className="home-title">
                  Our <span>Community</span>
              </h1>
              <div className="question-box">
                <div className="box-info">
                    <h2 className="question-title">
                        The Question
                    </h2>
                    <div className="student-info">
                        <img src="/Images/student.jpg" alt="" />
                        <p className="student-name">
                        student name: shadi Alhamdo
                        </p>
                    </div>
                    <span className="date">01-02-2025</span>
                </div>
                <div className="box-content">
                    the new question For Test ......
                    This is New Question For Testing ,This is New Question For Testing ,
                    This is New Question For Testing ,This is New Question For Testing ,
                </div>
            </div>
          </div>
        </div>
        <form onSubmit={formSubmitHandler} className="community-form">
        <label className="paragraph" >You can add Your Answer Here ...</label>
               <div className="input-field">
                    <input type="text"  onChange={(e)=>setContent(e.target.value)}  placeholder="Type Here ..." />
                    <button type="submit">Add</button>
               </div>
            </form>
       <div className="container">
       <span className="course-details-videoList">Answer List</span>
            <div className="box">
                <div className="box-info">
                    <div className="student-info">
                        <img src="/Images/student.jpg" alt="" />
                        <p className="student-name">
                        student name: shadi Alhamdo
                        </p>
                    </div>
                    <span className="date">01-02-2025</span>
                </div>
                <div className="box-content">
                    the new question For Test ......
                    This is New Question For Testing ,This is New Question For Testing ,
                    This is New Question For Testing ,This is New Question For Testing ,
                </div>
            </div>
            <div className="box">
                <div className="box-info">
                    <div className="student-info">
                        <img src="/Images/student.jpg" alt="" />
                        <p className="student-name">
                        student name: shadi Alhamdo
                        </p>
                    </div>
                    <span className="date">01-02-2025</span>
                </div>
                <div className="box-content">
                    the new question For Test ......
                    This is New Question For Testing ,This is New Question For Testing ,
                    This is New Question For Testing ,This is New Question For Testing ,
                </div>
            </div>
            <div className="box">
                <div className="box-info">
                    <div className="student-info">
                        <img src="/Images/student.jpg" alt="" />
                        <p className="student-name">
                        student name: shadi Alhamdo
                        </p>
                    </div>
                    <span className="date">01-02-2025</span>
                </div>
                <div className="box-content">
                    the new question For Test ......
                    This is New Question For Testing ,This is New Question For Testing ,
                    This is New Question For Testing ,This is New Question For Testing ,
                </div>
            </div>
       </div>
        
      </div> );
}
 
export default Answers;