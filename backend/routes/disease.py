from fastapi import APIRouter, UploadFile, File
from transformers import pipeline
from PIL import Image

router = APIRouter()

print("Loading Plant Disease AI Model...")

classifier = pipeline(
    "image-classification",
    model="linkanjarad/mobilenet_v2_1.0_224-plant-disease-identification"
)

print("Model Loaded Successfully!")

# Disease Information
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

        prediction = classifier(image)

        label = prediction[0]["label"]
        confidence = round(prediction[0]["score"] * 100, 2)

        info = disease_info.get(
            label,
            {
                "treatment": "Consult agriculture expert.",
                "prevention": "Monitor crop regularly.",
                "fertilizer": "Balanced NPK fertilizer."
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

        return {
            "error": str(e)
        }