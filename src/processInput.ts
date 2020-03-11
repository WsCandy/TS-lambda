import { Status } from "./model/Status";
import FunctionInput from "./model/FunctionInput";
import createResponse from "./util/createResponse";

const processInput = async (input: FunctionInput<any>) => {
    console.log(`Processing Input ${input.method}...`);

    return createResponse(Status.BAD);
};

export default processInput;
