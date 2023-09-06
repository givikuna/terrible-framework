import * as express from "express";
import * as fs from "fs";

const app: express.Application = express();

app.get("/", (req: express.Request, res: express.Response): express.Response<any, Record<string, any>> => {
    try {
        res.write(
            String(
                fs.readFileSync("../src/index.html", {
                    encoding: "utf8",
                    flag: "r",
                }),
            ).replace(/@dynamiclink/g, "http://localhost"),
        );

        return res.end();
    } catch (e: unknown) {
        res.write("");
        return res.end();
    }
});

const PORT = 8091;

app.listen(PORT, (): void => console.log(`Server is up and running on port ${PORT}`));
