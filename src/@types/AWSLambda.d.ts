type SQSAttributes = {
    readonly ApproximateReceiveCount: string;
    readonly SentTimestamp: string;
    readonly SenderId: string;
    readonly ApproximateFirstReceiveTimestamp: string;
};

type SQSItem = {
    readonly messageId: string;
    readonly receiptHandle: string;
    readonly body: string;
    readonly attributes: SQSAttributes;
    readonly messageAttributes: {
        [key: string]: any;
    };
    readonly md5OfBody: string;
    readonly eventSource: string;
    readonly eventSourceARN: string;
    readonly awsRegion: string;
};

type AWSLambdaResponse = {
    readonly statusCode: number;
    readonly body?: string;
};

export type AWSLambdaEvent = {
    readonly Records?: SQSItem[];
};

export type AWSLambdaHandler = (
    event: AWSLambdaEvent
) => Promise<AWSLambdaResponse>;
