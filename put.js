import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({region: "ca-central-1", endpoint: "http://localhost:8000", credentials: {secretAccessKey: "test", accessKeyId: "test" }});
const docClient = DynamoDBDocumentClient.from(client);

export const main = async () => {
  // {"Artist": {"S": "No One You Know"}, "SongTitle": {"S": "Call Me Today"}, "AlbumTitle": {"S": "Somewhat Famous"}}'
  const command = new PutCommand({
    TableName: "Music",
    Item: {"Artist": "No One You Know", "SongTitle": "Call Me Today",  "AlbumTitle": "Somewhat Famous"}
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

main();