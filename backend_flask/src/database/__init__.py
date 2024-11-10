from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
import os
import time

database = SQLAlchemy()


def connect_to_db(app=None, retries=5, delay=5):
    db_url = os.getenv('DB_URL')
    db_config = {
        "SQLALCHEMY_DATABASE_URI": db_url,
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }
    if app:
        app.config.update(db_config)
        database.init_app(app)
        print("Database connection established.")
        return database
    # else attempt retrying to connect to the database
    for attempt in range(retries):
        try:
            engine = create_engine(db_url, **db_config["SQLALCHEMY_ENGINE_OPTIONS"])
            connection = engine.connect()
            connection.close()
            print("Database connection established.")
            return database
        except OperationalError as e:
            print(f"Attempt {attempt + 1} - Could not connect to the database: {e}")
            if attempt < retries - 1:
                print(f"Retrying in {delay} seconds...")
                time.sleep(delay)
            else:
                print("All attempts to connect to the database failed.")
                return None

