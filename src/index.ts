import { AWSLambdaHandler, Status } from "./@types/AWSLambda";
import createResponse from "./util/createResponse";

const handler: AWSLambdaHandler = async () => {
    return createResponse(Status.OK);
};

export { handler };
