from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from backend.database.database import get_db
from backend.models.farmer import Farmer
from backend.schemas.farmer import FarmerCreate, FarmerResponse

router = APIRouter()

# Register Farmer
@router.post("/register", response_model=FarmerResponse)
def register_farmer(farmer: FarmerCreate, db: Session = Depends(get_db)):
    new_farmer = Farmer(
        name=farmer.name,
        mobile=farmer.mobile,
        village=farmer.village,
        district=farmer.district,
        crop=farmer.crop
    )

    db.add(new_farmer)
    db.commit()
    db.refresh(new_farmer)

    return new_farmer


# Get All Farmers
@router.get("/farmers", response_model=list[FarmerResponse])
def get_all_farmers(db: Session = Depends(get_db)):
    return db.query(Farmer).all()


# Get Farmer by ID
@router.get("/farmer/{farmer_id}", response_model=FarmerResponse)
def get_farmer(farmer_id: int, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()

    if farmer is None:
        raise HTTPException(status_code=404, detail="Farmer not found")

    return farmer


# Update Farmer
@router.put("/farmer/{farmer_id}", response_model=FarmerResponse)
def update_farmer(farmer_id: int, updated: FarmerCreate, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()

    if farmer is None:
        raise HTTPException(status_code=404, detail="Farmer not found")

    farmer.name = updated.name
    farmer.mobile = updated.mobile
    farmer.village = updated.village
    farmer.district = updated.district
    farmer.crop = updated.crop

    db.commit()
    db.refresh(farmer)

    return farmer


# Delete Farmer
@router.delete("/farmer/{farmer_id}")
def delete_farmer(farmer_id: int, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()

    if farmer is None:
        raise HTTPException(status_code=404, detail="Farmer not found")

    db.delete(farmer)
    db.commit()

    return {
        "message": "Farmer deleted successfully"
    }