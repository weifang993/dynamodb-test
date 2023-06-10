import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

// https://medium.com/quick-code/node-js-restful-api-with-dynamodb-local-7e342a934a24
// https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/dynamodb
/*
 the table is created with the following command.
 aws dynamodb create-table --table-name Music 
                           --attribute-definitions AttributeName=Artist,AttributeType=S AttributeName=SongTitle,AttributeType=S 
                           --key-schema AttributeName=Artist,KeyType=HASH AttributeName=SongTitle,KeyType=RANGE 
                           --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 
                           --table-class STANDARD 
                           --endpoint-url http://localhost:8000
*/
const client = new DynamoDBClient({ region: "ca-central-1", endpoint: "http://localhost:8000", credentials: {secretAccessKey: "test", accessKeyId: "test" }});

export const main = async () => {
  console.log('Creating the table')

  var params = {
    TableName: "Music",
    AttributeDefinitions: [
      { AttributeName: "Artist", AttributeType: "S" },
      { AttributeName: "SongTitle", AttributeType: "S" },
    ],
    KeySchema: [
      { AttributeName: "Artist", KeyType: "HASH" },  //Partition key
      { AttributeName: "SongTitle", KeyType: "RANGE" },  //Range key
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableClass: "STANDARD",
    DeletionProtectionEnabled: false,
  };
  try {
    const command = new CreateTableCommand(params);
    const response = await client.send(command);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  return;
};

main();
