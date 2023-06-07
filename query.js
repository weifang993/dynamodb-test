import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "ca-central-1", endpoint: "http://localhost:8000"});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
  // {"Artist": {"S": "No One You Know"}, "SongTitle": {"S": "Call Me Today"}, "AlbumTitle": {"S": "Somewhat Famous"}}'
  const command = new QueryCommand({
    TableName: "Music",
    KeyConditionExpression: "#key = :artistName",
    ExpressionAttributeNames:{
      "#key": "Artist"
    },
    ExpressionAttributeValues: {
      ":artistName": "No One You Know"
    }
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

main();