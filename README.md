# User-Authentication-Authorization-using-FastAPI

# Task Manager

A simple Task Manager built using FastAPI, SQLAlchemy, JWT Authentication, and React.

---

## Features

- User Signup
- User Login
- JWT Authentication
- User Profile
- Create Task
- View Tasks
- Update Task
- Delete Task
- React Frontend
- Context API
- Protected Routes

---

## Technologies

Backend

- Python
- FastAPI
- SQLAlchemy
- SQLite
- JWT
- Passlib

Frontend

- React
- Vite
- React Router
- Axios
- Context API

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/task-manager.git
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Backend

```
http://127.0.0.1:8000
```

Frontend

```
http://localhost:5173
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /signup | Register |
| POST | /login | Login |
| GET | /profile | Profile |
| POST | /tasks | Create Task |
| GET | /tasks | Get Tasks |
| GET | /tasks/{id} | Get Task |
| PUT | /tasks/{id} | Update Task |
| DELETE | /tasks/{id} | Delete Task |

---

## Folder Structure

```
Mentor_assigned_task
│
├── backend
│
│   ├── routers
│   ├── auth.py
│   ├── crud.py
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── config.py
│   ├── oauth2.py
│   ├── utils.py
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│
│   ├── src
│   │
│   ├── pages
│   ├── context
│   ├── services
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## Author

Kavinkumar

Mentor_assigned_task/
│
├── backend/
│   ├── routers/
│   │   ├── authentication.py
│   │   ├── users.py
│   │   └── tasks.py
│   │
│   ├── auth.py
│   ├── oauth2.py
│   ├── crud.py
│   ├── database.py
│   ├── config.py
│   ├── models.py
│   ├── schemas.py
│   ├── utils.py
│   ├── requirements.txt
│   ├── task_manager.db
│   └── main.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddTask.jsx
│   │   │   ├── EditTask.jsx
│   │   │   └── Profile.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── LICENSE
