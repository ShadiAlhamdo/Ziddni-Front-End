import Heading from "./Heading";

const Services = () => {
    return ( 
        <section className="services">
        <Heading title={"Our Services"}/>
        <div className="services-container">
            <div className="box">
                <div className="box-icon">
                    <img src="/icons/graduation-hat-folder.png" alt="" />
                </div>
                <div className="box-image">
                   <img src="/Images/services-1.png" alt="" />
                </div>
                <div className="box-text">
                   <h5>Course Enrollment</h5>
                   <p>Students can easily enroll in a variety of courses that suit their interests and learning goals.
                     With a user-friendly interface, finding and joining courses has never been easier.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-icon">
                    <img src="/icons/video-camera-folder.png" alt="" />
                </div>
                <div className="box-image">
                   <img src="/Images/services-2.png" alt="" />
                </div>
                <div className="box-text">
                   <h5>Video Lectures</h5>
                   <p>Access high-quality video lectures from experienced instructors.
                     Students can watch lectures at their own pace,
                     ensuring they fully understand the material before moving on.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-icon">
                    <img src="/icons/folder-link.png" alt="" />
                </div>
                <div className="box-image">
                   <img src="/Images/services-5.png" alt="" />
                </div>
                <div className="box-text">
                   <h5>Interactive QA Community</h5>
                   <p>Engage with fellow students and instructors in our interactive community.
                     Students can ask questions,
                     share insights, and collaborate to enhance their learning experience.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-icon">
                    <img src="/icons/folder-warning.png" alt="" />
                </div>
                <div className="box-image">
                   <img src="/Images/services-4.png" alt="" />
                </div>
                <div className="box-text">
                   <h5>Instructor Approval System</h5>
                   <p> Our platform ensures quality content by requiring instructor accounts to be approved by an admin.
                     This guarantees that only qualified individuals can offer courses and materials.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-icon">
                    <img src="/icons/pen-folder.png" alt="" />
                </div>
                <div className="box-image">
                   <img src="/Images/services-3.png" alt="" />
                </div>
                <div className="box-text">
                   <h5>Commenting and Feedback</h5>
                   <p> Students can provide feedback on video lectures and courses through comments.
                     This feature allows for constructive discussions and helps instructors improve their content.
                    </p>
                </div>
            </div>
            <div className="box">
                <div className="box-icon">
                    <img src="/icons/computer.png" alt="" />
                </div>
                <div className="box-image">
                   <img src="/Images/services-6.png" alt="" />
                </div>
                <div className="box-text">
                   <h5> Mobile-Friendly Access</h5>
                   <p>Enjoy a seamless learning experience on any device.
                     Our platform is designed to be fully responsive,
                     allowing students to access courses and materials from their smartphones, tablets, or computers.
                    </p>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Services;