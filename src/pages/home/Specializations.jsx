import Heading from "./Heading";

const Specializations = () => {
    return ( 
        <section className="specializations">
            <Heading title={"The most popular specialties"}/>
            <div className="container">
                <div className="box">
                    <div className="box-image">
                        <img src="Images/specializations.jpg" alt="" />
                    </div>
                    <div className="box-overlay"></div>
                    <h4>Specializations Name</h4>
                </div>
                <div className="box">
                    <div className="box-image">
                        <img src="Images/specializations.jpg" alt="" />
                    </div>
                    <div className="box-overlay"></div>
                    <h4>Specializations Name</h4>
                </div><div className="box">
                    <div className="box-image">
                        <img src="Images/specializations.jpg" alt="" />
                    </div>
                    <div className="box-overlay"></div>
                    <h4>Specializations Name</h4>
                </div><div className="box">
                    <div className="box-image">
                        <img src="Images/specializations.jpg" alt="" />
                    </div>
                    <div className="box-overlay"></div>
                    <h4>Specializations Name</h4>
                </div>
            </div>
        </section>
     );
}
 
export default Specializations;