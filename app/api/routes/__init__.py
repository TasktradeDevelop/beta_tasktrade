from fastapi import APIRouter
from .auth import router as auth_router
from .users import router as users_router
from .dashboard import router as dashboard_router

# Create a main router to include all individual routers
router = APIRouter()

# Include individual route modules
router.include_router(auth_router, prefix="/auth", tags=["Authentication"])
router.include_router(users_router, prefix="/users", tags=["Users"])
router.include_router(dashboard_router, prefix="/dashboard", tags=["Dashboard"])
