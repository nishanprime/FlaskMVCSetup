from . import database

def init_db():
    with database.engine.connect() as conn:
        # print all tables in the database
        conn.execute("SHOW TABLES")
    database.create_all()  # Creates tables based on models
    print("Database connected successfully.")