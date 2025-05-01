import { Link } from "react-router-dom";

const TeacherBox = () => {
    return ( 
        <div className="box holographic-card">
                    <div className="box-image">
                        <img src="/Images/teacher.jpg" alt="" />
                    </div>
                    <div className="box-text">
                        <div className="title-date">
                            <h4>Name:Teacher Name</h4>
                            <span>Joined Date:2025/10/10</span>
                        </div>
                        <div className="specialization">
                            Specialization Name: <span>Name-Name</span>
                        </div> 
                    </div>
                        <p className="bio">
                            Bio,text Bio
                            Bio,Bio,Bio,
                            Bio,Bio,Bio,
                            Bio,Bio,Bio,
                            Bio,Bio,Bio,
                            Bio,Bio,Bio
                        </p>
                        <div className="buttons">
                            <Link to={"/profile/1"} className="register-course">
                            Go To Profile
                            </Link>
                            
                        </div>
            </div>
     );
}
 
export default TeacherBox;