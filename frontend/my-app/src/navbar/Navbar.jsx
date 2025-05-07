import "./Navbar.css";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import doctor from "../assets/images/banner-doctor-1.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="medic-logo" className="logo" />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/patients">View Patients</Link>
          <Link to="/patients/add">Add Patient</Link>
          <Link to="/admissions">View Admissions</Link>
        </div>

        <div className="navbar-right">
          <img src={search} alt="search" className="search-icon" />
          <h3>Login</h3>
        </div>
      </div>

      <div className="banner-image-wrapper">
        <img src={doctor} alt="hospital banner" className="banner-image" />
      </div>
    </>
  );
};

export default Navbar;
