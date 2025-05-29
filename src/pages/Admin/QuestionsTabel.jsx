import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import { deleteQuestion, getAllQuestion } from "../../redux/apiCalls/communityApiCall";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const QuestionsTabel = () => {
    const dispatch = useDispatch();
    const {questions} = useSelector(state=>state.community);
    
    useEffect(()=>{
        dispatch(getAllQuestion());
    },[]);
    // Delete Question Handler
    const deleteQuestionHandler=async (id)=>{
      const result =await  Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Question!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          });
            if (result.isConfirmed) {
              await dispatch(deleteQuestion(id));
              dispatch(getAllQuestion());
            }
          
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Questions</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User Name</th>
                            <th>Question</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions?.map((item,index)=>(
                            <tr key={item._id }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <span className="tabel-username">{item?.user?.username}</span>
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.content}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                       
                                        <button onClick={()=>deleteQuestionHandler(item?._id)}>
                                            Delete Question
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
     );
}
 
export default QuestionsTabel;