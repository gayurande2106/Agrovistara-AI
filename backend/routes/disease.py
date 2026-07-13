from fastapi import APIRouter, UploadFile, File
from PIL import Image
import requests
import os
import io

router = APIRouter()

HF_TOKEN = os.getenv("HF_TOKEN")

API_URL = "https://api-inference.huggingface.co/models/linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification"

headers = {
    "Authorization": f"Bearer {HF_TOKEN}"
}

disease_info = {
    "Tomato___Early_blight": {
        "treatment": "Spray Copper Oxychloride or Mancozeb.",
        "prevention": "Avoid overhead watering and remove infected leaves.",
        "fertilizer": "NPK 19:19:19"
    },
    "Tomato___Late_blight": {
        "treatment": "Use Metalaxyl fungicide.",
        "prevention": "Improve air circulation.",
        "fertilizer": "NPK 20:20:20"
    },
    "Potato___Early_blight": {
        "treatment": "Spray Mancozeb.",
        "prevention": "Use certified seeds.",
        "fertilizer": "DAP + Potash"
    }
}

@router.post("/")
async def detect_disease(file: UploadFile = File(...)):
    try:
        image = Image.open(file.file).convert("RGB")

        img_bytes = io.BytesIO()
        image.save(img_bytes, format="JPEG")
        img_bytes = img_bytes.getvalue()

        response = requests.post(
            API_URL,
            headers=headers,
            data=img_bytes
        )

        prediction = response.json()

        if isinstance(prediction, dict) and prediction.get("error"):
            return prediction

        label = prediction[0]["label"]
        confidence = round(prediction[0]["score"] * 100, 2)

        info = disease_info.get(
            label,
            {
                "treatment": "Consult Agriculture Expert",
                "prevention": "Monitor crop regularly",
                "fertilizer": "Balanced NPK"
            }
        )

        return {
            "disease": label,
            "confidence": confidence,
            "treatment": info["treatment"],
            "prevention": info["prevention"],
            "fertilizer": info["fertilizer"]
        }

    except Exception as e:
        return {"error": str(e)}