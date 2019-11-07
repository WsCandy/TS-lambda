import { Status } from "./model/Status";
import { SQSItem } from "./@types/AWSLambda";

const processItem = async (item: SQSItem): Promise<Status> => {
    console.log(item);
    return Status.OK;
};

export default processItem;
