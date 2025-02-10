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


@router.get("/search", response_class=HTMLResponse)
async def open_search_auth_page(request: Request):
    return templates.TemplateResponse("search-auth.html", {'request': request})


@router.get("/search-id", response_class=HTMLResponse)
async def open_search_id_page(request: Request):
    return templates.TemplateResponse("search-id.html", {'request': request})


@router.get("/search-pw", response_class=HTMLResponse)
async def open_search_pw_page(request: Request):
    return templates.TemplateResponse("search-pw.html", {'request': request})
