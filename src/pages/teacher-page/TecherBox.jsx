import { Link } from "react-router-dom";
import DateChange from "../../components/Date/DateChange";

const TeacherBox = ({username, bio ,id ,createdAt,profilePhoto,specialization}) => {
    return ( 
        <div className="box holographic-card">
                    <div className="box-image">
                        <img src={`${profilePhoto?.url}`} alt="" />
                    </div>
                    <div className="box-text">
                        <div className="title-date">
                            <h4>Name : {username}</h4>
                            <span><DateChange date={createdAt}/> </span>
                        </div>
                        <div className="specialization">
                            Specialization Name: <span>{specialization}</span>
                        </div> 
                    </div>
                        <p className="bio">
                            {bio}
                        </p>
                        <div className="buttons">
                            <Link to={`/profile/teacher/${id}`} className="register-course">
                            Go To Profile
                            </Link>
                            
                        </div>
            </div>
     );
}
 
export default TeacherBox;