from flask import request, g

def setup_middlewares(app):
    @app.before_request
    def before_request():
        # Logic before handling each request
        print("Before Request Middleware")

    @app.after_request
    def after_request(response):
        # Logic after handling each request
        print("After Request Middleware")
        return response
    
    @app.before_request
    def authenticate():
        # Logic before handling each request
        print("Authenticate Middleware")
        g.user = "Test User"
