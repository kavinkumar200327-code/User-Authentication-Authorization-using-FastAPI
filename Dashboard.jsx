import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {

        const res = await api.get("/tasks");

        setTasks(res.data);

    };

    useEffect(() => {

        loadTasks();

    }, []);

    const deleteTask = async (id) => {

        if (window.confirm("Delete Task?")) {

            await api.delete(`/tasks/${id}`);

            loadTasks();

        }

    };

    return (

        <div className="container">

            <h2>My Tasks</h2>

            <Link to="/add">
                <button>Add Task</button>
            </Link>

            <table>

                <thead>

                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        tasks.map(task => (

                            <tr key={task.id}>

                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>{task.status}</td>

                                <td>

                                    <Link to={`/edit/${task.id}`}>
                                        Edit
                                    </Link>

                                    {" | "}

                                    <button onClick={() => deleteTask(task.id)}>
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default Dashboard;