import os
import uuid
import json
import time
import boto3
from botocore.client import Config

def insert_metadata_into_db(event):

    dynamodb = boto3.client('dynamodb')

    project_number = event["queryStringParameters"].get('project_number' , "00000000")
    project_name = event["queryStringParameters"].get('project_name' , "no name specified")
    project_status = event["queryStringParameters"].get('make_active' , "inactive")
    entry_status = 'in_use'
    time_stamp = str(int(time.time()))

    response = dynamodb.put_item(
        TableName='test_arup_projects',
        Item={
            'project_number': {'S':project_number},
            'project_name': {'S':project_name},
            'project_status': {'S':project_status},
            'entry_status': {'S':entry_status},
            'time_stamp': {'S':time_stamp},
        }
    )

def lambda_handler(event, context):

    insert_metadata_into_db(event)

    return {
        "isBase64Encoded": False,
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({'message' : 'update successful'})
    }
