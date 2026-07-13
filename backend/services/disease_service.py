import random

diseases = [
    {
        "disease": "Healthy Leaf",
        "confidence": 99.2,
        "recommendation": "No action required."
    },
    {
        "disease": "Leaf Blight",
        "confidence": 95.6,
        "recommendation": "Spray Copper Oxychloride."
    },
    {
        "disease": "Powdery Mildew",
        "confidence": 96.8,
        "recommendation": "Apply Sulfur Fungicide."
    },
    {
        "disease": "Bacterial Spot",
        "confidence": 94.3,
        "recommendation": "Use Copper-based bactericide."
    }
]


def predict_disease():
    return random.choice(diseases)