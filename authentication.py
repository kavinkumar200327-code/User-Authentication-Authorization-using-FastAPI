from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

import schemas
import crud
from database import get_db
from utils import verify_password
from auth import create_access_token

router = APIRouter(
    prefix = "/login",
    tags = ["Authentication"]
)

@router.post("/")
def login(request: schemas.Login,
            db: Session = Depends(get_db)):
    
    user = crud.get_user_by_email(db, request.email)

    if not user:
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail = "Invalid Credentials"
        )
    
    if not verify_password(request.password, user.password):
        raise HTTPException(
            status_code = status.HTTP_401_UNAUTHORIZED,
            detail = "Invalid Credentials"
        )
    
    access_token = create_access_token(
        data = {"user_id": user.id}
    )

    return{
        "access_token": access_token,
        "token_type": "bearer"
    }