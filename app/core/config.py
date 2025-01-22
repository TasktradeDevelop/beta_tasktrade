from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "My FastAPI Project"
    DEBUG: bool = False
    DATABASE_URL: str
    SECRET_KEY: str

    class Config:
        env_file = ".env"  # Load from .env file
        env_file_encoding = "utf-8"

settings = Settings()
