bucket=buildingperformance.arup.digital
lambda=test-lambda-authoriser-request
key_inside_bucket=assets
region=ap-southeast-2

babel lambda-function.js --out-file index.js
zip authoriser-request.zip index.js
zip -ur authoriser-request.zip variables.js
zip -ur authoriser-request.zip node_modules

rm -rf index.js
