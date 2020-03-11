import FunctionInput from "./FunctionInput";
import { Response } from "../util/createResponse";

export type AWSLambdaHandler<T> = (
    event: FunctionInput<T>,
    context: any
) => Promise<Response>;
