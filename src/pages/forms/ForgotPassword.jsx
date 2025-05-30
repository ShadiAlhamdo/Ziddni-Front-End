import "./form.css";
import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import { forgotPassword } from "../../redux/apiCalls/passwordApiCall";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");

    // يمكنك هنا إرسال البيانات للسيرفر أو التحقق منها
    
    dispatch(forgotPassword(email));
    navigate("/login")
  };

  return (
    <section className="form-container login-container ">
      <h1 className="form-title">Forgot Password</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Your Email
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
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ForgotPassword;
