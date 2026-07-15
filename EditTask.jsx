import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";
import "./TaskForm.css";

function EditTask() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [task, setTask] = useState({

        title: "",
        description: "",
        status: "Pending"

    });

    useEffect(() => {

        api.get(`/tasks/${id}`).then(res => {

            setTask(res.data);

        });

    }, [id]);

    const handleChange = (e) => {

        setTask({

            ...task,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await api.put(`/tasks/${id}`, task);

        navigate("/dashboard");

    };

    return (

        <div className="form-container">

            <h2>Edit Task</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
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

                <button>Update</button>

            </form>

        </div>

    );

}

export default EditTask;