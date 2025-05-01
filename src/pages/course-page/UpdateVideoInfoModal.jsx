import { useState } from "react";

const UpdateVideoInfoModal = ({setUPdateVideo,video}) => {
    const [title,setTitle]=useState(video.title);
    const [file,setFile]=useState(video.image);
    const formSubmitHandler = (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('title', title);
      
        if (file) {
          formData.append('file', file);
        }
        
         // طباعة محتوى الـ formData
  for (let pair of formData.entries()) {
    console.log(pair[0] + ': ' + pair[1]);
  }
    }
    return ( 
        <div className="update-course">
            <form onSubmit={formSubmitHandler}  className="update-course-form">
                <abbr title="close" onClick={()=>setUPdateVideo(false)}>
                    <img className="update-course-form-close" src="/icons/cancel.png" alt="" />
                </abbr>
                <h1 className="update-course-title">Update Course</h1>
                <input type="text" name="" id=""
                 className="update-course-input"
                 value={title} 
                 onChange={(e)=>setTitle(e.target.value)}
                 />
                 <label className="create-course-label">Choose A Picture For Video</label>
                 <input type="file" name="file"id="file" 
                 className="update-course-upload"
                 onChange={(e)=>setFile(e.target.files[0])}
                 />
                
                 <button type="submit" className="update-course-btn">Update Course</button>
            </form>
        </div>
     );
}
 
export default UpdateVideoInfoModal;