var express = require('express');
var axios = require('axios');
var querystring = require('querystring');

exports.handle = function (e, ctx, callback) {

//var app = express();

let authorityHostUrl = 'https://login.microsoftonline.com';
let tenant = '4ae48b41-0137-4599-8661-fc641fe77bea/oauth2/token';

let axiosConfigToken = {
  grant_type: 'password',
  resource: 'https://arup.onmicrosoft.com/AIS',
  username: '',
  password: '',
  client_id: '629c4269-f6f4-453f-a9ee-7e3a6b48e5f4',
  scope: 'openid'
};

let queryType = e['queryStringParameters']['type']
let queryPayload = e['queryStringParameters']['value']
let endpoint

switch (queryType) {
  case 'JobNumber':
    endpoint = 'Projects?$expand=Jobs&$filter=ProjectCode eq \'' + queryPayload + '00\''
    break;
  case 'AccountingCentreCode':
    endpoint = 'AccountingCentres(\'' + queryPayload + '\')'
    break;
  case 'GroupCode':
    endpoint = 'Groups(\'' + queryPayload + '\')'
    break;
  case 'RegionCode':
    endpoint = 'Regions(\'' + queryPayload + '\')'
    break;
  case 'PracticeCode':
    endpoint = 'Practices(\'' + queryPayload + '\')'
    break;
  case 'BusinessCode':
    endpoint = 'Businesses(\'' + queryPayload + '\')'
    break;
  case 'ProjectDirectorId':
  case 'ProjectManagerId':
    endpoint = 'Staff(\'' + queryPayload + '\')'
    break;
  case 'CountryCode':
    endpoint = 'Countries(\'' + queryPayload + '\')'
    break;
  case 'ClientCode':
    endpoint = 'Clients(\'' + queryPayload + '\')'
    break;
  default:
    let failedResponse = {
        "statusCode": 200,
        "headers": {
          "Access-Control-Allow-Origin": "*"
        },
        "body": 'No parameter \'type\' provided. Please make sure both the \'type\' and \'value\' parameters have been provided',
        "isBase64Encoded": false
    };
    callback(null, failedResponse)
}

axios.post('https://login.microsoftonline.com/' + tenant, querystring.stringify(axiosConfigToken))
  .then(function(response){
      axios({
        method: 'get',
        url: 'https://adsprapiman-aue.azure-api.net/cds/odata/' + endpoint,
        headers: {
          'Ocp-Apim-Subscription-Key': 'f7782428563545f4a4eb0ed3dfdaa250',
          'Authorization': 'Bearer '+ response.data.access_token,
          'Accept': 'application/json, text/plain, */*'
        }
      })
      .then(function(rawArupResponse){
        console.log(rawArupResponse.data)
        var formattedResponse = {
            "statusCode": 200,
            "headers": {
              "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(rawArupResponse.data),
            "isBase64Encoded": false
        };
        callback(null, formattedResponse)
      })
      .catch(function(error) {
        console.log(error)
      })
    })
    .catch(function(error) {
    console.log(error)
  }
)


}

//app.get('/', (req, res) => res.send('Hello World!'))
//app.listen(3001);
//console.log('listening on 3001');
