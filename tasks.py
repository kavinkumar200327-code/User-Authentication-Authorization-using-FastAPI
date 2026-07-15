from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import crud
import schemas
from database import get_db
from oauth2 import get_current_user

router = APIRouter(
    prefix = "/tasks",
    tags = ["Tasks"]
)

@router.post("/", response_model = schemas.TaskResponse)
def create_task(
    task: schemas.TaskCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return crud.create_task(db, task, current_user)

@router.get("/", response_model = list[schemas.TaskResponse])
def all_task(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    return crud.get_tasks(db, current_user)

@router.get("/{id}", response_model = schemas.TaskResponse)
def one_task(
    id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    task = crud.get_task(db, id, current_user)

    if not task:
        raise HTTPException(
            status_code = 404,
            details = "Task Not found"
        )
    
    return task

@router.put("/{id}", response_model = schemas.TaskResponse)
def update(
    id: int,
    task: schemas.TaskCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    update = crud.update_task(db,id,task,current_user)

    if not update:
        raise HTTPException(
            status_code = 404,
            detail = "Task not found"
        )
    
    return update

@router.delete("/{id}")
def delete(
    id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    delete = crud.delete_task(db, id, current_user)

    if not delete:
        raise HTTPException(
            status_code = 404,
            detail = "Task not found"
        )
    
    return{"message": "Task Deleted Successfully"}
