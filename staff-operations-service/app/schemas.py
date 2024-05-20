from pydantic import BaseModel
from datetime import datetime

class StaffCreate(BaseModel):
    first_name: str
    last_name: str
    position: str
    hire_date: datetime
    email: str
    phone_number: str

class Staff(StaffCreate):
    id: int

    class Config:
        orm_mode = True
