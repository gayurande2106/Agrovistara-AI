import requests

API_KEY = "26b0f1802a39a9fd9c1650408bb429fa"

def get_weather(city):
    url = (
        f"https://api.openweathermap.org/data/2.5/weather"
        f"?q={city}&appid={API_KEY}&units=metric"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return {"error": "City not found"}

    data = response.json()

    return {
    "city": city,
    "temperature": data["main"]["temp"],
    "humidity": data["main"]["humidity"],
    "condition": data["weather"][0]["description"],
}