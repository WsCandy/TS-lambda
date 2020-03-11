import { handler } from "./index";

require("dotenv").config();

const method = handler(
    {
        method: "Test",
        detail: {}
    },
    {}
);

method.then(res => {
    console.log(res);
});
