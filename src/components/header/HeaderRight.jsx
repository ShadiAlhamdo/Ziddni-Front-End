import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const HeaderRight = () => {
    const {user}=useSelector(state=>state.auth);
    const [dropdown,setDropdown]=useState(false);
    
    return (  
        <div className="header-right">
                {user ?
                 <>
                 <div className="header-right-user-info">
                    <span onClick={()=>setDropdown(!dropdown)} className="header-rigth-username">
                        {user?.username}
                    </span>
                    <img src={user?.profilePhoto.url} alt="user Photo" className="header-right-user-photo" />

                    { dropdown &&(
                        <div className="header-right-dropdown">
                        <Link onClick={()=>setDropdown(false)} to={`/profile/${user._id}`} className="header-dropdown-item">
                        <img src="../icons/person.png" alt="" />
                            <span>Profile</span>
                        </Link>
                        <div className="header-dropdown-item">
                            <img src="../icons/logout.png" alt="" />
                            Logout
                        </div>
                     </div>
                    )}
                 </div>
                
                </>
                :
                (<>
                    <button className="header-right-link">
                    <img src="../icons/login.ico" alt="" />
                        <Link to='/login'>Login</Link>
                    </button>
                    <button className="header-right-link">
                    <img src="../icons/pen-new-square.ico" alt="" />
                        <Link to='/register'>Register</Link>
                    </button>
                    </>
                )}
            </div>
    );
}
 
export default HeaderRight;