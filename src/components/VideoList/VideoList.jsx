import { Link } from "react-router-dom";

const VideoList = ({toggleList,isOpen,videos,handleItemClick ,courseId}) => {
    return ( 
        <div className="video-list-container">
            <button onClick={toggleList} className="toggle-button">
                Videos List
            </button>

                <ul className={`video-list-wrapper ${isOpen ? 'open' : ''}`}>
                {videos?.map((v) => (
                            <li className="video-list-item">
                            <Link  to={`/videos/details/${v._id}?courseId=${courseId}`}  onClick={handleItemClick}>{v.title}</Link>
                            </li>
                            ))}
                   
                </ul>
          </div>
    );
}
 
export default VideoList ;