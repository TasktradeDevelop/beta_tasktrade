from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates/auth")

router = APIRouter(
    prefix="/auth",
)


@router.get("/login", response_class=HTMLResponse)
async def open_login_page(request: Request):
    return templates.TemplateResponse("login.html", {'request': request})


@router.get("/signup", response_class=HTMLResponse)
async def open_signup_page(request: Request):
    return templates.TemplateResponse("signup.html", {'request': request})
