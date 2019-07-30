import { AWSLambdaHandler } from "./@types/AWSLambda";

const handler: AWSLambdaHandler = async () => {
    return {
        statusCode: 200
    };
};

export { handler };
