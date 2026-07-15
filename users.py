from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import schemas
import crud
from database import get_db

router = APIRouter(
    prefix = "/users",
    tags = ["Users"]
)

@router.post("/", response_model = schemas.UserResponse)
def register(user: schemas.UserCreate,
            db: Session = Depends(get_db)
            ):
    return crud.create_user(db, user)