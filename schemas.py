from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str
    status: str

class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    pass

class TaskResponse(TaskBase):
    id: int

class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    username: str
    email: str

    class Config:
        from_attributes = True


class Login(BaseModel):
    email: str
    password: str