import { AWSLambdaHandler } from "./model/AWSLambda";
import processInput from "./processInput";

const handler: AWSLambdaHandler<any> = async (input, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const response = await processInput(input);

    if (response.statusCode !== 200) {
        throw new Error(`Error encountered, status code ${status}`);
    }

    return response;
};

export { handler };
