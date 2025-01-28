from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates/missions")

router = APIRouter(
    prefix="/mission",
)


@router.get("/upload", response_class=HTMLResponse)
async def open_mission_upload_page(request: Request):
    return templates.TemplateResponse("mission-upload.html", {'request': request})
