import jwt
from flask import request, make_response
from datetime import datetime, timedelta
import os

# Configuration values
JWT_SECRET = os.getenv("JWT_SECRET")  # Use environment variable in production
COOKIE_NAME = os.getenv("COOKIE_NAME")
ENV = os.getenv("ENV")

# Function to generate JWT token
def generate_token(user_id):
    payload = {
        "id": user_id,
        "exp": datetime.utcnow() + timedelta(days=7)  # Expires in 7 days
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
    return token

# Function to retrieve token from cookies in request
def get_token():
    cookie_token = request.cookies.get(COOKIE_NAME)
    return cookie_token if cookie_token else None

# Function to set a cookie in the response
def set_cookie(response, token):
    if not COOKIE_NAME or not token:
        raise ValueError("Cookie name or token is missing")

    # Set cookie options
    response.set_cookie(
        COOKIE_NAME,
        token,
        max_age=60 * 60 * 24 * 7,  # 7 days in seconds
        httponly=True,
        secure=(ENV == "production"),
        samesite="Strict",
        path="/"
    )
    return response

# Function to remove the cookie from the response
def remove_cookie(response):
    response.set_cookie(
        COOKIE_NAME,
        "",
        expires=0,  # Immediately expires the cookie
        httponly=True,
        secure=(ENV == "production"),
        samesite="Strict",
        path="/"
    )
    return response
