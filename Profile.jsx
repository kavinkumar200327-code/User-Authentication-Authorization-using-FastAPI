import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";

function Profile() {

    const { user } = useContext(AuthContext);

    return (
        <div className="container">

            <h2>Profile</h2>

            <p><strong>Name:</strong> {user?.full_name}</p>

            <p><strong>Email:</strong> {user?.email}</p>

        </div>
    );
}

export default Profile;