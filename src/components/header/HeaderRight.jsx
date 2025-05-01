import { Link } from "react-router-dom";

const HeaderRight = () => {
    return (  
        <div className="header-right">
                <button className="header-right-link">
                <img src="../icons/login.ico" alt="" />
                    <Link to='/login'>Login</Link>
                </button>
                <button className="header-right-link">
                <img src="../icons/pen-new-square.ico" alt="" />
                    <Link to='/register'>Register</Link>
                </button>
            </div>
    );
}
 
export default HeaderRight;