import { Status } from "../model/Status";

interface Response {
    readonly statusCode: Status;
}

const createResponse = (status: Status): Response => ({
    statusCode: status
});

export default createResponse;
