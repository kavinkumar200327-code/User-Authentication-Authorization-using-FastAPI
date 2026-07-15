import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "./TaskForm.css";

function AddTask() {

    const navigate = useNavigate();

    const [task, setTask] = useState({

        title: "",
        description: "",
        status: "Pending"

    });

    const handleChange = (e) => {

        setTask({

            ...task,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await api.post("/tasks", task);

        navigate("/dashboard");

    };

    return (

        <div className="form-container">

            <h2>Add Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="title"
                    placeholder="Title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleChange}
                />

                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                >

                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>

                </select>

                <button>Add</button>

            </form>

        </div>

    );

}

export default AddTask;