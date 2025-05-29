import { useDispatch, useSelector } from "react-redux";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import { deleteAnswer, getAllAnswers } from "../../redux/apiCalls/communityApiCall";
import { useEffect } from "react";

const AnswersTabel = () => {
    const dispatch = useDispatch();
    const {answers} = useSelector(state=>state.community.answersAll);
    
    useEffect(()=>{
        dispatch(getAllAnswers());
    },[]);
   
    // Delete Answer Handler
    const deleteAnswerHandler=async(answer)=>{
    const result=await    Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Answer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          });
            if (result.isConfirmed) {
            await dispatch(deleteAnswer(answer));
            dispatch(getAllAnswers())
            }
         
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Answers</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User Name</th>
                            <th>Answer</th>
                            <th>Question</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {answers?.map((item,index)=>(
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
                                   {item?.question?.content}
                                </td>
                                <td>
                                    <div className="tabel-butoon-group">
                                       
                                        <button onClick={()=>deleteAnswerHandler(item)}>
                                            Delete Answer
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
 
export default AnswersTabel;