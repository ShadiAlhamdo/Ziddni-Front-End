import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";
import {useDispatch ,useSelector} from "react-redux"
import { deleteSpecialization, getSpecializations } from "../../redux/apiCalls/specializationApiCall";
import { useEffect, useState } from "react";
import UpdateSpecializationForm from "./UpdateSpecializationForm";
const SpecializationsTabel = () => {
    const dispatch = useDispatch();
    const {specializations} = useSelector(state=>state.specialization);
    const [updateSpecialization,setUpdateSpecialization] = useState(false);
    const [specialization,setSpecialization] = useState("");
    useEffect(()=>{
        dispatch(getSpecializations());
    },[])
    // Delete Specialization Handler
    const deleteSpecializationHandler=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this Video!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#040734",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(deleteSpecialization(id));
            }
          });
    }
    return ( 
        <section className="tabel-container">
            <AdminSideBar/>
            <div className="tabel-wrapper">
                <h1 className="tabel-title">Specializations</h1>
                <table className="tabel">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>Specializations Image</th>
                            <th>Specialization Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specializations.map((item,index)=>(
                            <tr key={index }>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="tabel-image">
                                        <img src={item?.specializationPhoto?.url}  className="tabel-specializations-image" alt="" />
                                    </div>
                                   
                                </td>
                                <td>
                                   {item?.specializationName}
                                </td>
                                <td>
                                
                                    <div className="tabel-butoon-group">
                                        <button>
                                            <Link to={`/specializations/${item?.specializationName}`}>View Specialization</Link>
                                        </button>
                                        <button onClick={()=>deleteSpecializationHandler(item?._id)}>
                                            Delete Specialization
                                        </button>
                                       
                                    </div>
                                    <div className="tabel-update-group">
                                        <button onClick={()=>{setSpecialization(item); setUpdateSpecialization(true)}} className="tabel-update-btn" >
                                            Update Specialization
                                        </button>
                                        </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {updateSpecialization && <UpdateSpecializationForm setUpdateSpecialization={setUpdateSpecialization} specialization={specialization}/>}

            </div>
           
        </section>
     );
}
 
export default SpecializationsTabel;