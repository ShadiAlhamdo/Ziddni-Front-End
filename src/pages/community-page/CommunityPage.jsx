import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CommunityPage = () => {
    const [content,setContent]=useState("");
    const [search,setSearch]=useState("");
    const formSubmitHandler = (e) => {
        e.preventDefault();
    
        if (content.trim() === "") {
          return toast.error("The Answer Content Is Required");
        }
    
        const formData = new FormData();
        formData.append('content', content);
        console.log("Content to add:", content);
        // ترسل البيانات هنا لو تريد
      };
    
      const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    
        // كل مرة المستخدم يكتب، تعمل بحث مباشرة
        searchHandler(value);
      };
    
      const searchHandler = (query) => {
        console.log("Searching for:", query);
        // هنا تضع كود البحث الخاص بك (مثلا تصفية قائمة أو طلب API)
      };
    
    return ( 
        <div className="community-page courses-page">
           <ToastContainer theme="colored" position="top-center"/>
        <div className="image-title">
           <div className="home-hero-header-layout">
              <h1 className="home-title">
                  Our <span>Community</span>
              </h1>
              <p >To get the answers, click on the question.</p>
          </div>
        </div>
        <form onSubmit={formSubmitHandler}  className="community-form">
        <label className="paragraph" >You can search for a question that a student has asked before.</label>
               <div className="input-field">
                    <label htmlFor="search"><img src="/icons/search.png" alt="" /></label>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        value={search}
                        onChange={handleSearchChange}
                        placeholder="Type Here For Search ..."
                    />       
                </div>
               <div className="add-question-field">
                <label htmlFor="text">Add Your Question</label>
                <input type="text" name="text" id="text" onChange={(e)=>setContent(e.target.value)} placeholder="Type here please ...." value={content} />
                <button type="submit" className="add-question-btn">Add</button>
               </div>
            </form>
       <div className="container">
            <Link to={"/answers/1"} className="box">
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
            </Link>
            
       </div>
        
      </div>
     );
}
 
export default CommunityPage;