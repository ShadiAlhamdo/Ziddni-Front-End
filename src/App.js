import Header from "./components/header/header";
import {BrowserRouter,Routes,Route} from "react-router-dom"
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
import { ToastContainer } from "react-toastify";
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


function App() {
  const user={
    id:"123",
    role:"teacher"
  }
  return (
    <BrowserRouter >
      <Header/>
      <Sidebar/>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/courses" element={<CoursePage/>}/>
        <Route path="/teachers" element={<TeahersPage/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/answers/:id" element={<Answers/>}/>
        <Route path="/specializations" element={<SpecializationsPage/>}/>
        
        <Route path="/admin-dashboard" >
        <Route index element={<AdminDashboard/>}/>
        <Route path="teachers-tabel" element={<TeachersTabel/>}/>
        <Route path="students-tabel" element={<StudentsTabel/>}/>
        <Route path="courses-tabel" element={<CoursesTabel/>}/>
        <Route path="videos-tabel" element={<VideosTabel/>}/>
        <Route path="specializations-tabel" element={<SpecializationsTabel/>}/>
        <Route path="categories-tabel" element={<CategoriesTabel/>}/>
        <Route path="comments-tabel" element={<CommentsTabel/>}/>
        <Route path="questions-tabel" element={<QuestionsTabel/>}/>
        <Route path="answers-tabel" element={<AnswersTabel/>}/>
        </Route>

        <Route path="/profile/:id" element={user.role==="teacher"?<TeacherProfile/>:<StudentProfile/>}/>
        <Route path="/profile/create-course" element={<CreateCourse/>}/>
        <Route path="/courses/details/:id" element={<CourseDetails/>}/>
        <Route path="/videos/details/:id" element={<VideoDetails/>}/>
        <Route path="/profile/create-video" element={<CreateVideo/>}/>
        <Route path="/forgot-Password" element={<ForgotPassword/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
