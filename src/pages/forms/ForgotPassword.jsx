import "./form.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");

    // يمكنك هنا إرسال البيانات للسيرفر أو التحقق منها
    const loginData = {
      email,
    };

    console.log("Login Data:", loginData);
    toast.success("Login submitted!");
  };

  return (
    <section className="form-container login-container ">
       <ToastContainer theme="colored" position="top-center"/>
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
