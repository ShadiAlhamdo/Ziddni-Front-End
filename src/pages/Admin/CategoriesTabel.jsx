import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteCtegory, fetchAllCtegories } from "../../redux/apiCalls/categoryApiCall";
import { useEffect } from "react";
const CategoriesTabel= () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state=>state.category);

    useEffect(()=>{
        dispatch(fetchAllCtegories());
    },[])
    // Delete Category Handler
    const deleteCategoryHandler=(c)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Category!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             dispatch(deleteCtegory(c?._id));
            }
          });
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Categories</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Category Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.map((c,ind)=>(
                            <tr key={c?._id }>
                                <td>{ind + 1}</td>
                                <td>
                                   <b>{c?.title}</b>
                                </td>
                                <td>
                                
                                    <div className="tabel-butoon-group">
                                        <button onClick={()=>deleteCategoryHandler(c)}>
                                            Delete Category
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
 
export default CategoriesTabel
;