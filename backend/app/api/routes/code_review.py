from fastapi import APIRouter, UploadFile, File
from app.utils.quality_analysis import analyze_code_quality
from app.utils.security_analysis import analyze_security

code_review_router = APIRouter()

@code_review_router.post("/upload")
async def upload_code(file: UploadFile = File(...)):
    code = await file.read()
    quality_issues = analyze_code_quality(code.decode())
    security_issues = analyze_security(code.decode())
    return {"quality_issues": quality_issues, "security_issues": security_issues}

@code_review_router.get("/review")
async def get_review():
    # Placeholder for example suggestions
    return [
        "Consider using 'const' for variables that are not reassigned.",
        "Avoid using global variables.",
        "Add error handling for database calls."
    ]
