import os
from flask import Flask, request, jsonify,g
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask.logging import default_handler
import logging
from datetime import datetime
from logging.handlers import RotatingFileHandler

def setup_middlewares(app: Flask):
    # Set up logging level based on the environment
    if app.config["ENV"] == "production":
        app.logger.setLevel(logging.INFO)
    else:
        app.logger.setLevel(logging.DEBUG)

    # Remove Flask's default handler and configure custom formatting
    app.logger.removeHandler(default_handler)
    
    # Stream handler (console output)
    stream_handler = logging.StreamHandler()
    stream_handler.setFormatter(logging.Formatter(
        "[%(asctime)s] %(levelname)s in %(module)s: %(message)s"
    ))
    app.logger.addHandler(stream_handler)

    # Prepare the logs folder structure with date-based subfolder and filename
    log_dir = "logs"
    date_folder = datetime.now().strftime("%Y-%m-%d")
    date_path = os.path.join(log_dir, date_folder)
    os.makedirs(date_path, exist_ok=True)  # Ensure the directory exists

    # Set up RotatingFileHandler with a dynamic date-based file path
    log_filename = f"{datetime.now().strftime('%Y-%m-%d')}.log"
    file_handler = RotatingFileHandler(
        os.path.join(date_path, log_filename), maxBytes=5 * 1024 * 1024, backupCount=5
    )
    file_handler.setFormatter(logging.Formatter(
        "[%(asctime)s] %(levelname)s in %(module)s: %(message)s"
    ))
    app.logger.addHandler(file_handler)

    # CORS configuration
    allowed_origins = [
        "https://example.com"  # Add production origins here
    ]
    if app.config["ENV"] == "development":
        allowed_origins.append("http://localhost:3000")  # Dev origin

    CORS(app, origins=allowed_origins, supports_credentials=True)

    # Rate limiting
    limiter = Limiter(
        key_func=get_remote_address,
        app=app,
        default_limits=["10 per 5 minutes"],  # Limit each IP to 100 requests per 5 minutes
        storage_uri="memory://",  # In-memory storage; use Redis or other storage for production
    )

    # Exempt specific IPs or routes from rate limiting
    @limiter.request_filter
    def exempt_from_limit():
        # Exempt certain IPs or specific paths from rate limiting
        # internal_ips = ["127.0.0.1"]
        # if request.remote_addr in internal_ips or request.path == "/api/demo":
        #     return True
        return False

    # Custom rate limit exceeded response
    @app.errorhandler(429)
    def rate_limit_exceeded(e):
        app.logger.warning(f"Rate limit exceeded: {request.remote_addr} - {request.path}")
        # be catious with the below line, it may expose sensitive data to server logs and can be a security risk
        # app.logger.info(f"Request JSON Body: {g.request_json_body}")
        return jsonify({
            "error": "Too many requests, please try again later.",
            "status": 429
        }), 429

    # Parsing cookies and form data limits
    app.config.update({
        "MAX_CONTENT_LENGTH": 10 * 1024 * 1024,  # 10MB limit for incoming requests
        "TRUSTED_PROXIES": "10.0.0.0/8",  # Example of trusted proxy configuration
    })
