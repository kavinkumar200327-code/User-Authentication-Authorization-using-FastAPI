from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine
import models

from routers import users
from routers import authentication
from routers import tasks

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title = "Task Manager API",
    version = "1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(users.router)
app.include_router(authentication.router)
app.include_router(tasks.router)

@app.get("/")
def root():
    return{"message":"Task Manager API Running Successfully"}