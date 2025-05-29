import AdminMain from "./AdminMain";
import AdminSideBar from "./AdminSideBar";

const AdminDashboard = () => {
    return ( 
        <section className="admin-dashboard">
           <AdminSideBar/>
           <AdminMain />

        </section>
     );
}
 
export default AdminDashboard;