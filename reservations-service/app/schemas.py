from pydantic import BaseModel
from datetime import datetime

class ReservationCreate(BaseModel):
    guest_name: str
    room_type: str
    start_date: datetime
    end_date: datetime

class Reservation(ReservationCreate):
    id: int
    status: str

    class Config:
        orm_mode = True
