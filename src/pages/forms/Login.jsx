import { Link } from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux"
import { loginUser } from "../../redux/apiCalls/authApiCall";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    // يمكنك هنا إرسال البيانات للسيرفر أو التحقق منها
    
    dispatch(loginUser({email,password}));
    
    setEmail("");
    setPassword("");
  };

  return (
    <section className="form-container login-container ">
      <h1 className="form-title">Login In Your Account</h1>
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

        <button type="submit" className="form-btn">
          Login
        </button>
      </form>

      <div className="form-footer">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </section>
  );
};

export default Login;
