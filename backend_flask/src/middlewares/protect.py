# These acts like middleware, defining rules that needs to be followed before accessing a route
# For example, there could be certain routes that only authenticated users can access, so we can 
# define a middleware that checks if the user is authenticated or not and stuffs like that
from flask import request, jsonify, g
from functools import wraps
from ..utils.token import get_token
import jwt
import os

def protect(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        #get the token from cookie
        token=get_token()
        if not token:
            return jsonify({"message":"Unauthorized! You need to login to access this"}),401
        # decode and validate the token
        try:
            decoded=jwt.decode(token,os.getenv("JWT_SECRET"),algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            return jsonify({"message":"Token expired! Please login again"}),401
        except jwt.InvalidTokenError:
            return jsonify({"error": "Invalid token. Please log in again."}), 401
        user_id=decoded.get("id")
        if not user_id:
            return jsonify({"error": "Login is required to access this!"}), 401
        # Now find in databse if this user exists
        # TODO: Add database logic here
        user=False
        if not user:
            return jsonify({"error": "Login is required to access this!"}), 401
        # Now we can check additional conditions like if user is verified
        # if not cans end otp and stuffs, but for now we will just return the user
        g.user=user
        return f(*args, **kwargs)
    return decorated_function
