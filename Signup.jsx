import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import "./Auth.css";

function Signup() {

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/register", formData);

            alert("Registration Successful");

            navigate("/");

        } catch (error) {

            alert(error.response?.data?.detail || "Registration Failed");
        }

    }

    return (
        <div className="form-container">

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="full_name"
                    placeholder="Full Name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button>Signup</button>

            </form>

            <p>
                Already have account?
                <Link to="/"> Login</Link>
            </p>

        </div>
    );
}

export default Signup;