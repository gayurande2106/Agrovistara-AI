from fastapi import APIRouter
from pydantic import BaseModel
from dotenv import load_dotenv
from google import genai
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/")
def chatbot(data: ChatRequest):
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
You are Agrovistara AI.

You are an agriculture expert.

Answer only agriculture related questions.

If the question is not related to agriculture,
politely refuse.

Question:
{data.message}
"""
        )

        return {"reply": response.text}

    except Exception as e:
        return {"reply": str(e)}