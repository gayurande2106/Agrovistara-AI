from pydantic import BaseModel

class FarmerCreate(BaseModel):
    name: str
    mobile: str
    village: str
    district: str
    crop: str


class FarmerResponse(FarmerCreate):
    id: int

    class Config:
        from_attributes = True