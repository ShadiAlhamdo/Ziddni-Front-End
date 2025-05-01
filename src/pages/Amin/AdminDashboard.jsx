import { ToastContainer } from "react-toastify";
import AdminMain from "./AdminMain";
import AdminSideBar from "./AdminSideBar";

const AdminDashboard = () => {
    return ( 
        <section className="admin-dashboard">
            <ToastContainer theme="colored" position="top-center"/>
           <AdminSideBar/>
           <AdminMain />

        </section>
     );
}
 
export default AdminDashboard;