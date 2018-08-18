import os
import json

import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):

    dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2')

    table = dynamodb.Table('test_arup_projects')

    response = table.scan(
        FilterExpression=Key('entry_status').eq('in_use')
    )

    return {
        "isBase64Encoded": False,
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps({'table_entries' : response})
    }
