from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="app/templates/users")

router = APIRouter(
    prefix="/users",
)


@router.get("/profile", response_class=HTMLResponse)
async def open_myprofile(request: Request):
    return templates.TemplateResponse("myprofile.html", {'request': request})
