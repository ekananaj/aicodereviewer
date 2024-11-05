from fastapi import FastAPI
from app.api.routes.code_review import code_review_router

app = FastAPI()

app.include_router(code_review_router, prefix="/api")
