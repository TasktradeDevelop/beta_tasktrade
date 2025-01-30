from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates/missions")

router = APIRouter(
    prefix="/mission",
)


@router.get("/", response_class=HTMLResponse)
async def open_missions_main_page(request: Request):
    return templates.TemplateResponse("missions-main.html", {'request': request})


@router.get("/my", response_class=HTMLResponse)
async def open_my_mission_page(request: Request):
    return templates.TemplateResponse("my-mission.html", {'request': request})


@router.get("/upload", response_class=HTMLResponse)
async def open_mission_upload_page(request: Request):
    return templates.TemplateResponse("mission-upload.html", {'request': request})
