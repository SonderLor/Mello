from fastapi import FastAPI
from app.api.v1.routes import api_router

app = FastAPI(title="Mello API")

app.include_router(api_router)


@app.get("/")
def root():
    return {"message": "Mello API is running"}
