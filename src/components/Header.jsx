import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="Header">
      <h1>To Do</h1>
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          style={{ width: "60px", height: "30px",color:"black" }}
        >
          LogOut
        </button>
      )}
    </nav>
  );
}

export default Header;
