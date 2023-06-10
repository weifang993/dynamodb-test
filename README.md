# dynamodb-test

This project is a test run of local dynamoDB with JavaScript on NUC Ubuntu 2023.04.

API reference:
https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-dynamodb/index.html

# install local AWS NoSQL workbench and DynamoDB

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.settingup.html

# start local NoSQL workbench

* opt/DynamoDBWorkbench$ ./'NoSQL Workbench-linux-3.6.1.AppImage' 
* start local db by turning on 'DDB local' after the UI starts.

https://blog.phillipninan.com/using-nosql-workbench-for-a-local-dynamodb

* create a connection to local dynamoDB
* select table and browse content

# create table

* node index.js

# run operations

* node put.js
* node get.js