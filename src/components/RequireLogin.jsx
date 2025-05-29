import { useEffect } from "react";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";

function RequireLogin() {
   const Navigate = useNavigate();
  useEffect(() => {
 
    const timer = setTimeout(() => {
      Navigate("/login")
    }, 3000); // بعد ثانيتين

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="require-login">
      {toast.warning("You must first log in to access this page.")}
    </div>
  )
}

export default RequireLogin;
