from fastapi import APIRouter
from .auth import router as auth_router
from .users import router as users_router
from .mission import router as mission_router
from .coin import router as coin_router

# Create a main router to include all individual routers
router = APIRouter()

# Include individual route modules
router.include_router(auth_router)
router.include_router(users_router)
router.include_router(mission_router)
router.include_router(coin_router)
