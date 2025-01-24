from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates/users")

router = APIRouter(
    prefix="/users",
)


@router.get("/profile", response_class=HTMLResponse)
async def open_my_profile(request: Request):
    return templates.TemplateResponse("my-profile.html", {'request': request})
