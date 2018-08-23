import os
import uuid
import json
import time
import boto3
from botocore.client import Config

def update_db_metadata(event):

    project_number = event["queryStringParameters"].get('project_number' , "00000000")
    project_status = event["queryStringParameters"].get('project_status' , "test-update")

    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2')

    table = dynamodb.Table('test_arup_projects')

    table.update_item(
    Key={
        'project_number': project_number
    },
    UpdateExpression='SET project_status = :val1',
    ExpressionAttributeValues={
        ':val1': project_status
    }
)

def lambda_handler(event, context):

    update_db_metadata(event)

    return {
        "isBase64Encoded": False,
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({'message' : 'update successful'})
    }
