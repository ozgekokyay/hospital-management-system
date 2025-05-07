import "./banner.css"
import ellipse from "../assets/images/ellipse.png"
import doctor from "../assets/images/banner-doctor-1.png"

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">

                <div className="banner-heading">
                    <h2>Hacettepe Hospital</h2>
                    <h3>Appointment Management System</h3>

                </div>
                
                <div className="banner-subheading">
                    <p>We are here to serve people with patient centered-care to deliver outstanding healthcare for better lives.</p>
                </div>

                <div className="banner-buttons">
                    <button className="banner-appointment-button">Request appointment</button>
                    <button className="banner-learn-button">Learn More</button>
                </div>

            </div>

        </div>
    )
}

export default Banner