
import os
from src import create_app

if __name__ == "__main__":

    def start_app():
        app = create_app()
        app.run(port=int(os.getenv("PORT", 8000)), debug=True)
    start_app()


