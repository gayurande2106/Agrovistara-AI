from fastapi import APIRouter

router = APIRouter()

@router.get("/{crop}")
def fertilizer(crop: str):

    data = {
        "Cotton": {
            "fertilizer": "NPK 20:20:20",
            "dosage": "50 kg/acre"
        },
        "Rice": {
            "fertilizer": "Urea",
            "dosage": "45 kg/acre"
        },
        "Soybean": {
            "fertilizer": "DAP",
            "dosage": "40 kg/acre"
        },
        "Wheat": {
            "fertilizer": "NPK 10:26:26",
            "dosage": "60 kg/acre"
        }
    }

    return data.get(
        crop,
        {
            "fertilizer": "Not Available",
            "dosage": "-"
        }
    )