import Header from "./components/header/header";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register";
import CoursePage from "./pages/course-page/CoursesPage";
import TeahersPage from "./pages/teacher-page/TeachersPage";
import SpecializationsPage from "./pages/specialization-page/SpecializationsPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CommunityPage from "./pages/community-page/CommunityPage";
import CreateCourse from "./pages/profile-page/CreateCourse";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import Sidebar from "./components/sidebar/sidebar";
import CreateVideo from "./pages/profile-page/CreateVideo";
import CourseDetails from "./pages/course-page/CourseDetails";
import VideoDetails from "./pages/course-page/VideoDetails";
import TeacherProfile from "./pages/profile-page/TeacherProfile";
import StudentProfile from "./pages/profile-page/StudentProfile";
import Answers from "./pages/community-page/Answers";
import TeachersTabel from "./pages/Admin/TeachersTabel";
import StudentsTabel from "./pages/Admin/StudentsTabel";
import CoursesTabel from "./pages/Admin/CoursesTabel";
import VideosTabel from "./pages/Admin/VideosTabel";
import SpecializationsTabel from "./pages/Admin/SpecializationsTabel";
import CategoriesTabel from "./pages/Admin/CategoriesTabel";
import CommentsTabel from "./pages/Admin/CommentsTabel";
import QuestionsTabel from "./pages/Admin/QuestionsTabel";
import AnswersTabel from "./pages/Admin/AnswersTabel";
import ForgotPassword from "./pages/forms/ForgotPassword";
import NotFound from "./pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import Category from "./pages/Category/Category";
import Specialization from "./pages/specialization-page/Specialization";
import {  ToastContainer } from "react-toastify";
import RequireLogin from "./components/RequireLogin";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import ResetPassword from "./pages/forms/Reset-Password";



function App() {
  const {user}=useSelector(state=>state.auth);
 
  return (
    <BrowserRouter >
      <Header/>
      <Sidebar/>
      <ToastContainer position="top-center" theme="colored"  />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={!user?<Login/>:<Navigate to={"/"}/>}/>
        <Route path="/register" element={!user?<Register/>:<Navigate to={"/"}/>}/>
        <Route path="/users/:userId/verify/:token" element={!user?<VerifyEmail/>:<Navigate to={"/"}/>}/>

        <Route path="/courses" element={<CoursePage/>}/>
        <Route path="/teachers" element={<TeahersPage/>}/>
        
        <Route path="/community" element={user?<CommunityPage/>:<Navigate to={"/"}/>}/>
        <Route path="/answers/:id" element={<Answers/>}/>
        <Route path="/specializations" element={<SpecializationsPage/>}/>
        <Route path="/specializations/:specializationName" element={<Specialization/>}/>
        <Route path="/admin-dashboard" >
        <Route index element={user?.isAdmin?<AdminDashboard/>:<Navigate to={"/"}/>}/>
        <Route path="teachers-tabel" element={user?.isAdmin? <TeachersTabel/>:<Navigate to={"/"}/>}/>
        <Route path="students-tabel" element={user?.isAdmin? <StudentsTabel/>:<Navigate to={"/"}/>}/>
        <Route path="courses-tabel" element={user?.isAdmin? <CoursesTabel/>:<Navigate to={"/"}/>}/>
        <Route path="videos-tabel" element={user?.isAdmin? <VideosTabel/>:<Navigate to={"/"}/>}/>
        <Route path="specializations-tabel" element={user?.isAdmin? <SpecializationsTabel/>:<Navigate to={"/"}/>}/>
        <Route path="categories-tabel" element={user?.isAdmin? <CategoriesTabel/>:<Navigate to={"/"}/>}/>
        <Route path="comments-tabel" element={user?.isAdmin? <CommentsTabel/>:<Navigate to={"/"}/>}/>
        <Route path="questions-tabel" element={user?.isAdmin? <QuestionsTabel/>:<Navigate to={"/"}/>}/>
        <Route path="answers-tabel" element={user?.isAdmin? <AnswersTabel/>:<Navigate to={"/"}/>}/>
        </Route>

        <Route path="/profile/teacher/:id" element={!user?<Navigate to={"/"}/>:<TeacherProfile/>}/>
        <Route path="/profile/student/:id" element={!user?<Navigate to={"/"}/>:<StudentProfile/>}/>
        <Route path="/profile/create-course" element={user?.role==="teacher"?<CreateCourse/>:<Navigate to={"/"}/>}/>
        <Route path="/courses/details/:id" element={<CourseDetails/>}/>
        <Route path="/courses/categories/:category" element={<Category/>}/>
        <Route path="/videos/details/:id" element={!user?<Navigate to={"/require-login"}/> :<VideoDetails/>}/>
        <Route path="/profile/create-video" element={user?.role==="teacher"?<CreateVideo/>:<Navigate to={"/"}/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/reset-password/:userId/:token" element={<ResetPassword/>}/>
        <Route path="/require-login" element={<RequireLogin/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
