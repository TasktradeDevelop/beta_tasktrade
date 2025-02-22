from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import engine, get_db
from models import Base, DemoUser

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/users/")
def read_users(db: Session = Depends(get_db)):
    return db.query(DemoUser).all()
