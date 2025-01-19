from fastapi import FastAPI, Request
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import HTMLResponse
from starlette.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

from app.database.database import Base, engine

app = FastAPI()

templates = Jinja2Templates(directory="app/templates")
app.mount("/static", StaticFiles(directory="app/static"), name="static")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.on_event("startup")
# def on_startup():
    # Create all tables
    # Base.metadata.drop_all(bind=engine)
    # Base.metadata.create_all(bind=engine)


@app.get("/", response_class=HTMLResponse)
async def root_home(request: Request):
    return templates.TemplateResponse("index.html", {'request': request})
