from fastapi import APIRouter, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates/coin")

router = APIRouter(
    prefix="/coin",
)


@router.get("/", response_class=HTMLResponse)
async def open_coin_exchange_withdrawal_main(request: Request):
    return templates.TemplateResponse("exchange_withdrawal.html", {'request': request})

