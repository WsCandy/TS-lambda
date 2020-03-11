import FunctionInput from "../model/FunctionInput";

const isInput = <T>(
    input: FunctionInput<any>,
    method: string
): input is FunctionInput<T> => input.method === method;

export default isInput;
