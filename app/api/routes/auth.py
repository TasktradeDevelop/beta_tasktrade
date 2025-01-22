from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="app/templates")

router = APIRouter(
    prefix="/auth",
)
