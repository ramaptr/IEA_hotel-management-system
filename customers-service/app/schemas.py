from pydantic import BaseModel

class CustomerCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone_number: str

class Customer(CustomerCreate):
    id: int

    class Config:
        orm_mode = True
