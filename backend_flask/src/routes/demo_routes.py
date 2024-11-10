from flask import Blueprint, g
from ..controllers.demo_controller import  get_details
from ..middlewares.protect import protect

demo_routers = Blueprint("api", __name__)


demo_routers.add_url_rule("/all", view_func=lambda: protect(get_details)(), methods=["GET"])
