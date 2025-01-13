from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, LargeBinary, Text
from sqlalchemy.orm import relationship
from sqlalchemy.types import Enum

from datetime import datetime
from app.database.database import Base


class UserTable(Base):
    __tablename__ = "beta_users"  # User Table name
