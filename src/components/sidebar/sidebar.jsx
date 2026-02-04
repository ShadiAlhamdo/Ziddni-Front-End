import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const {user}=useSelector(state=>state.auth);
     

    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('dark'); 
    const [showScrollToTop, setShowScrollToTop] = useState(false); // حالة زر الرجوع للأعلى

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.style.setProperty('--blue-color', 'var(--light-color)');
            document.documentElement.style.setProperty('--white-blue-color', 'var(--dark-color)');
        } else {
            document.documentElement.style.setProperty('--blue-color', '#040734');
            document.documentElement.style.setProperty('--white-blue-color', '#12bccf');
        }
    }, [theme]);

    // زر الرجوع للأعلى
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return ( 
        <>
             <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="button" onClick={toggleSidebar}>
                    <img src="/icons/settings.png" alt="Toggle Sidebar" />
                </div>
                {isOpen && (
                    <div className="links">
                        <div className="link">
                       
                            <div className="image">
                                
                                <img src={user?.profilePhoto.url} alt="Student" />
                            </div>
                            <span>{user?.username}</span>
                            
                            <Link onClick={toggleSidebar} to={user.role==="teacher"?`/profile/teacher/${user?._id}`:`/profile/student/${user?._id}`}>Profile</Link>
                            
                        </div>
                       {user.role==="teacher" ? 
                       <>
                       <div className="link">
                            
                            <Link onClick={toggleSidebar} to={"/profile/create-course"}>Create Course</Link>
                        </div>
                        <div className="link">
                            
                            <Link onClick={toggleSidebar} to={"/profile/create-video"}>Create Video</Link>
                        </div>
                       </>
                       :
                       <></>
                       }
                        <div className="colors">
                            <div className="color"> 
                                Dark 
                                <span className="dark" onClick={() => handleThemeChange('dark')}></span>
                            </div>
                            <div className="color">
                                Light 
                                <span className="light" onClick={() => handleThemeChange('light')}></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
           
            {/* زر السهم للأعلى */}
            {showScrollToTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                   <img src="/icons/up-arrow.png" alt="" />
                </button>
            )}
            
        </>
    );
};

export default Sidebar;
