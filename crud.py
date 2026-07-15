from sqlalchemy.orm import Session
import models
import schemas
from utils import hash_password

def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = hash_password(user.password)

    new_user = models.User(
        username = user.username,
        email = user.email,
        password = hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_task(db: Session, task: schemas.TaskCreate, user_id: int):
    new_task = models.Task(
        title = task.title,
        description = task.description,
        status = task.status,
        owner_id = user_id
    )

    db.add(new_task)
    db.commit
    db.refresh(new_task)

    return new_task

def get_tasks(db: Session, user_id: int):
    return db.query(models.Task).filter(
        models.Task.owner_id == user_id
    ).all()

def get_task(db: Session, task_id: int, user_id: int):
    return db.query(models.Task).filter(
        models.Task.id == task_id,
        models.Task.owner_id == user_id
    ).first()

def update_task(db: Session, task_id: int, task: schemas.TaskCreate, user_id: int):

    db_task = get_task(db, task_id, user_id)

    if not db_task:
        return None
    
    db_task.title = task.title
    db_task.description = task.description
    db_task.status = task.status

    db.commit()
    db.refresh(db_task)

    return db_task

def delete_task(db: Session, task_id: int, user_id: int):

    db_task = get_task(db, task_id, user_id)

    if not db_task:

        return None
    
    db.delete(db_task)
    db.commit()

    return db_task