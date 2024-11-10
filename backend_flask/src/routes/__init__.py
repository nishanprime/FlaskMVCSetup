from flask import Blueprint, g, Request, jsonify
from .demo_routes import demo_routers
api_routes = Blueprint("api", __name__)


@api_routes.route("/demo")
def demo():
    return {"message": "Hello World"}


@api_routes.route('/db-status')
def db_status():
    db_name = g.database.engine.url.database
    # Logic to check database status
    return {"status": "success", "message": f"Database connected successfully to {db_name}"}


# define all your sub-routes here
# -------------------------------
api_routes.register_blueprint(demo_routers, url_prefix="/demo")
# -------------------------------

# all the routes other than defined above will throw 404 error


@api_routes.errorhandler(404)
def page_not_found(e):
    return {"message": "Page not found"}, 404
