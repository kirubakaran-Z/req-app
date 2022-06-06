import "./navbar.css";
import logo from "./assets/search-512.webp";
import Mainlogo from "./assets/Mainlogo.jpeg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Mainlogo} alt="Logo" />
      </div>
      <div className="right-side-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search Candidates" />
          <button>
            <img src={logo} alt="Logo" />
          </button>
        </div>
        <div className="profile-actions"></div>
      </div>
    </nav>
  );
}

export default Navbar;
