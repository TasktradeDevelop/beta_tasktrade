from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, LargeBinary, Text
from sqlalchemy.orm import relationship
from sqlalchemy.types import Enum

from datetime import datetime
from app.database.database import Base


class UserTable(Base):
    __tablename__ = "beta_users"  # User Table name


class TaskSpecTable(Base):
    __tablename__ = "beta_task_spec" # User Task Specifics


class CoinTransactionTable(Base):
    __tablename__ = "beta_coin_trans" # User Coin Transactions


class UserQueryTable(Base):
    __tablename__ = "beta_user_query"  # User Query
