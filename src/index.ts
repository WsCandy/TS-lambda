import { AWSLambdaHandler } from "./@types/AWSLambda";
import createResponse from "./util/createResponse";
import { Status } from "./model/Status";
import processItem from "./processItem";

const handler: AWSLambdaHandler = async event => {
    const { Records } = event;

    if (typeof Records === "undefined") {
        return createResponse(Status.ERR);
    }

    const status = await Promise.all([Records.map(v => processItem(v))])
        .then(() => Status.OK)
        .catch(err => {
            console.log(err);
            return Status.ERR;
        });

    return createResponse(status);
};

export { handler };
