import { Link ,useNavigate} from "react-router-dom";
import "./form.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useDispatch,useSelector} from "react-redux"
import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";
import { getSpecializations } from "../../redux/apiCalls/specializationApiCall";

const Register = () => {

  const dispatch=useDispatch();
  const {registerMessage}=useSelector(state=> state.auth)
  const {specializations} = useSelector(state=>state.specialization);
  useEffect(()=>{
    dispatch(getSpecializations());
  },[]);
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [specialization,setSpecialization] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault(); // تم إصلاح الخطأ هنا

    if (username.trim() === "") return toast.error("User Name Is Required");
    if (email.trim() === "") return toast.error("Email Is Required");
    if (password.trim() === "") return toast.error("Password Is Required");
    if (role.trim() === "") return toast.error("You must select a role");

    // هنا يمكنك إرسال البيانات للخادم أو التعامل معها محليًا


    dispatch(registerUser({username
                          ,email,role,password,bio,
                          phoneNumber,whatsappLink,
                          specialization}));
   
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (registerMessage) {
      swal({
        title: registerMessage,
        icon: "success",
      }).then((isOk) => {
        if (isOk) {
          navigate("/login");
          window.location.reload(); // للتأكد من إغلاق SweetAlert نهائياً بعد الانتقال
        }
      });
    }
  }, [registerMessage, navigate]);
  return (
    <section className="form-container">
      <h1 className="form-title">Create New Account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter Your Name"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bio" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="bio"
            placeholder="Enter Your Description"
            className="form-input"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role" className="form-label">
            Select your account type
          </label>
          <select
            id="role"
            className="form-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option disabled value="">
              -- Select Role --
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>

        {role === "teacher" && (
          <>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter Your Phone Number"
                className="form-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapplink" className="form-label">
                WhatsApp Link
              </label>
              <input
                type="text"
                id="whatsapplink"
                placeholder="Enter Your WhatsApp Link"
                className="form-input"
                value={whatsappLink}
                onChange={(e) => setWhatsappLink(e.target.value)}
              />
            </div>
            <div className="form-group">
          <label htmlFor="specialization" className="form-label">
            Select your specialization 
          </label>
          <select
            id="specialization"
            className="form-input"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          >
            <option disabled value="">
              -- Select specialization --
            </option>
            {specializations?.map((s,ind)=>(
                  <option key={ind} value={`${s?._id}`}>{s?.specializationName}</option>
            ))}
           
          </select>
        </div>
          </>
        )}

        <button type="submit" className="form-btn">
          Register
        </button>
      </form>

      <div className="form-footer">
        Already Have An Account? <Link to={"/login"}>Login</Link>
      </div>
    </section>
  );
};

export default Register;
