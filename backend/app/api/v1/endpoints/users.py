from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db

router = APIRouter()


@router.get("/users")
async def get_users(db: AsyncSession = Depends(get_db)):
    return {"message": "Users list"}
