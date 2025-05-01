import AdminSideBar from "./AdminSideBar";
import Swal from "sweetalert2";
import swalWithBootstrapButtons from "sweetalert2";

const CategoriesTabel= () => {
    
    // Delete Category Handler
    const deleteCategoryHandler=()=>{
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
              Swal.fire({
                title: "Deleted!",
                text: "Category has been deleted.",
                icon: "success",
                confirmButtonColor: "#040734",
              });
            }else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Something Wrong :)",
                    icon: "error"
                });
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
                        {[1,2,3].map((item)=>(
                            <tr key={item }>
                                <td>{item}</td>
                                <td>
                                   <b>Design</b>
                                </td>
                                <td>
                                
                                    <div className="tabel-butoon-group">
                                        <button onClick={deleteCategoryHandler}>
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