import os
from dotenv import load_dotenv

# load environment variables from .env file
load_dotenv()


class Config:
    PORT=os.getenv('PORT')
    ENV=os.getenv('ENV')
    OPENAI_API_KEY=os.getenv('OPENAI_API_KEY')
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY')
    aws_secret_access_key=os.getenv('AWS_SECRET_KEY')
    region_name=os.getenv('AWS_REGION')
    aws_lex_role_arn=os.getenv('AWS_ARN')
    
          
