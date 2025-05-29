import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({toggel,setToggel}) => {
    const {user}=useSelector(state=>state.auth);

    return ( 
        <nav style={{clipPath:toggel&&"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
                <ul className="nav-links">
                    <Link  to="/" onClick={()=>setToggel(prev=> !prev)} className="nav-link">
                    <img src="/icons/Home.png" alt="" />Home
                    </Link>
                    <Link onClick={()=>setToggel(prev=> !prev)} to="/courses" className="nav-link">
                    <img src="/icons/online-course.ico" alt="" />Courses
                    </Link>
                    <Link onClick={()=>setToggel(prev=> !prev)} to="/community" className="nav-link">
                    <img src="/icons/community.ico" alt="" />Community
                    </Link>
                    <Link onClick={()=>setToggel(prev=> !prev)}  to="/teachers" className="nav-link">
                    <img src="/icons/teacher.ico" alt="" />Teachers
                    </Link>
                    <Link onClick={()=>setToggel(prev=> !prev)} to="/specializations" className="nav-link">
                    <img src="/icons/category.ico" alt="" />Specializations
                    </Link>
                    {user?.isAdmin &&<Link onClick={()=>setToggel(prev=> !prev)}  to="/admin-dashboard" className="nav-link">
                    <img src="/icons/newspaper.ico" alt="" />Admin Dashboard
                    </Link>}
                </ul>
            </nav>
     );
}
 
export default Navbar;