from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .models import Staff, Base
from .schemas import StaffCreate, Staff
from .database import SessionLocal, engine

Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/staff/", response_model=Staff)
def create_staff(staff: StaffCreate, db: Session = Depends(get_db)):
    db_staff = Staff(**staff.dict())
    db.add(db_staff)
    db.commit()
    db.refresh(db_staff)
    return db_staff

@router.get("/staff/{staff_id}", response_model=Staff)
def read_staff(staff_id: int, db: Session = Depends(get_db)):
    db_staff = db.query(Staff).filter(Staff.id == staff_id).first()
    if db_staff is None:
        raise HTTPException(status_code=404, detail="Staff not found")
    return db_staff
