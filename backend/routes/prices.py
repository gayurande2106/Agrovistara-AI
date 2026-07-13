from fastapi import APIRouter

router = APIRouter()

@router.get("/{crop}")
def get_price(crop: str):

    prices = {
        "Cotton": 7200,
        "Soybean": 4800,
        "Rice": 2600,
        "Wheat": 2400,
        "Maize": 2200,
        "Tur": 7600
    }

    return {
        "crop": crop,
        "price": prices.get(crop, "Price Not Available")
    }