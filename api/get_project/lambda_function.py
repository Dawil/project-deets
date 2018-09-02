import os
import json
from jose import jwt, jws
import requests

import boto3
from boto3.dynamodb.conditions import Key, Attr

def lambda_handler(event, context):

    token = event["queryStringParameters"].get('jwt' , "")

    access_token = event["queryStringParameters"].get('accesstoken' , "")

    auth0_pub_key = requests.get('https://arupdigital.au.auth0.com/.well-known/jwks.json').text

    print('cert', auth0_pub_key )

    audience = 'A1ib6vpGvP63H8ZoyVR62ZFE1NQzJ8V7'

    decoded = jwt.decode(
                token, auth0_pub_key, algorithms=['RS256'], audience=audience, access_token=access_token
            )

    verified = jws.verify(token, auth0_pub_key, algorithms=['RS256'], verify=True)

    print('verified', verified)

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
