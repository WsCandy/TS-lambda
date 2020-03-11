import { Status } from "../model/Status";

export interface Response {
    readonly statusCode: Status;
    readonly body?: any;
}

const createResponse = (status: Status, body?: any): Response => ({
    statusCode: status,
    body
});

export default createResponse;
