from fastapi import APIRouter
from backend.services.weather_service import get_weather

router = APIRouter()

@router.get("/{city}")
def weather(city: str):
    return get_weather(city)