from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .models import Reservation, Base
from .schemas import ReservationCreate, Reservation
from .database import SessionLocal, engine

Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/reservations/", response_model=Reservation)
def create_reservation(reservation: ReservationCreate, db: Session = Depends(get_db)):
    db_reservation = Reservation(**reservation.dict())
    db.add(db_reservation)
    db.commit()
    db.refresh(db_reservation)
    return db_reservation
