import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";

export async function handler (event: APIGatewayProxyEventV2) : Promise<APIGatewayProxyResultV2> {

    // code to persist something into a dynamo db table

    return {
        statusCode: 200,
        body: `I received ${event.body}`
    }
}