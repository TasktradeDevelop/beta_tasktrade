from pydantic import BaseModel, EmailStr


# form of login data sent from login page
class LoginData(BaseModel):
    userid: EmailStr
    password: str
