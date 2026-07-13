from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import Routers
from routes.weather import router as weather_router
from routes.auth import router as auth_router
from routes.upload import router as upload_router
from routes.disease import router as disease_router
from routes.prices import router as prices_router
from routes.fertilizer import router as fertilizer_router
from routes.chatbot import router as chatbot_router
from routes.user_auth import router as user_auth_router

from database.database import engine, Base
from models.user import User
from models.farmer import Farmer

# Create Database Tables
Base.metadata.create_all(bind=engine)

# Create FastAPI App
app = FastAPI(
    title="Agrovistara AI",
    description="AI-powered Smart Agriculture Platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://agrovistara-ai.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home Route
@app.get("/")
def home():
    return {
        "app": "Agrovistara AI",
        "status": "Running",
        "developer": "Gayatri Rande"
    }

# Weather Routes
app.include_router(
    weather_router,
    prefix="/weather",
    tags=["Weather"]
)

# Authentication Routes
app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

# Upload Routes
app.include_router(
    upload_router,
    prefix="/upload",
    tags=["Upload"]
)

#Disease Detection Routes
app.include_router(
    disease_router,
    prefix="/disease",
    tags=["Disease Detection"]
)

#Price Routes
app.include_router(
    prices_router,
    prefix="/prices",
    tags=["Crop Prices"]
)

#Fertilizer Routes
app.include_router(
    fertilizer_router,
    prefix="/fertilizer",
    tags=["Fertilizer"]
)

#Chatbot Router
app.include_router(
    chatbot_router,
    prefix="/chatbot",
    tags=["AI Chatbot"]
)

app.include_router(
    user_auth_router,
    prefix="/user",
    tags=["User Authentication"]
)
