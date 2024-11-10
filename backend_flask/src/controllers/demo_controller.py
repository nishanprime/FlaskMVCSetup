from flask import g
def login():
    # here we will autehnticate user and 
    # if true we will set cookie and return user details
    print(g.request_json_body)
    return "Login route"

def get_details():
    return "Get details route"