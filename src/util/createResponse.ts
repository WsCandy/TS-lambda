import { Status } from "../@types/AWSLambda";

interface Response {
    readonly statusCode: Status;
}

const createResponse = (status: Status): Response => ({
    statusCode: status
});

export default createResponse;
