import { useState , useEffect } from "react";
import {toast} from "react-toastify";
import {useSelector,useDispatch } from "react-redux";
import { createCourse } from "../../redux/apiCalls/courseApiCall";
import {useNavigate} from "react-router-dom";
import {RotatingLines } from "react-loader-spinner"
import { fetchAllCtegories } from "../../redux/apiCalls/categoryApiCall";
const CreateCourse = () => {
    const dispatch = useDispatch();
    const {loading , isCourseCreated} = useSelector(state=>state.course);
    const {categories} = useSelector(state=>state.category.categories);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("");
    const [file,setFile]=useState(null);

    useEffect(()=>{
        dispatch(fetchAllCtegories());
    })

    // Form Submit Handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(title.trim()===""){
            return toast.error(" Course Title Is Required")
        }
        if(description.trim()===""){
            return toast.error(" Course Description Is Required")
        }
        if(category.trim()===""){
            return toast.error(" Course Category Is Required")
        }
        if(!file){
            return toast.error(" Course Image Is Required")
        }
        const formData=new FormData();
        formData.append("image",file);
        formData.append("title",title);
        formData.append("category",category);
        formData.append("description",description);
        
        dispatch(createCourse(formData));
    };
    const navigate = useNavigate();
    useEffect(()=>{
        if(isCourseCreated){
            navigate("/");

        }
    },[isCourseCreated,navigate])

    return ( 
        <section className="create-course">
            <h1 className="create-course-title">
                Create New Course
            </h1>
            <form onSubmit={formSubmitHandler} className="create-course-form">
                <input  type="text" 
                placeholder="Course Title"
                className="create-course-input"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                   />
                <select className="create-course-input" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="" disabled>Select A Ctegory</option>
                    {categories?.map((c)=>(
                        <option value={c?.title}>{c?.title}</option>
                    ))}
                    
                </select>
                <textarea rows={5}
                className="create-course-textarea"
                 placeholder="Course Description"
                 value={description}
                 onChange={(e)=>setDescription(e.target.value)}
                 ></textarea>
                 <label className="create-course-label">Choose A Picture</label>
                <input type="file" name="file"id="file" className="create-course-upload"onChange={(e)=>setFile(e.target.files[0])}/>
                <button type="submit" className="create-course-btn">
                    {
                        loading ? <RotatingLines
                                        visible={true}
                                        width="40"
                                        color="white"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        />
                                        : "Create"
                    }
                    
                </button>
            </form>
        </section>
     );
}
 
export default CreateCourse;