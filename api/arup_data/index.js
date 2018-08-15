var express = require('express');
var axios = require('axios');
var querystring = require('querystring');

exports.handle = function (e, ctx, callback) {


//var app = express();

var authorityHostUrl = 'https://login.microsoftonline.com';
var tenant = '4ae48b41-0137-4599-8661-fc641fe77bea/oauth2/token';

var axiosConfigToken = {
  grant_type: 'password',
  resource: 'https://arup.onmicrosoft.com/AIS',
  username: '',
  password: '',
  client_id: '629c4269-f6f4-453f-a9ee-7e3a6b48e5f4',
  scope: 'openid'
};

let jobNumber = e['queryStringParameters']['jobnumber'] + '00' || 00000000

axios.post('https://login.microsoftonline.com/' + tenant, querystring.stringify(axiosConfigToken))
  .then(function(response){
      axios({
        method: 'get',
        url: 'https://adsprapiman-aue.azure-api.net/cds/odata/Projects?$expand=Jobs&$filter=ProjectCode eq ' + '\'' + jobNumber + '\'',
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
