import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h2>Task Manager</h2>

            <div>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>

                        <Link to="/add-task">Add Task</Link>

                        <Link to="/profile">Profile</Link>

                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/">Login</Link>

                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;