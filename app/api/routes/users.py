from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates/users"))

router = APIRouter(
    prefix="/users",
)


@router.get("/profile", response_class=HTMLResponse)
async def open_myprofile(request: Request):
    return templates.TemplateResponse("myprofile.html", {'request': request})
