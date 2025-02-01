from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates/supports")

router = APIRouter(
    prefix="/supports",
)


@router.get("/user-guide", response_class=HTMLResponse)
async def open_user_guide(request: Request):
    return templates.TemplateResponse("user-guide.html", {'request': request})


@router.get("/faq-n-inquiry", response_class=HTMLResponse)
async def open_faq_n_inquiry(request: Request):
    return templates.TemplateResponse("faq-inquiry.html", {'request': request})
