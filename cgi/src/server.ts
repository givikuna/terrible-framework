import * as express from "express";
import router from "./router";

const app: express.Application = express();

app.use(router);

const PORT = 8091;

app.listen(PORT, (): void => console.log(`Server is up and running on port ${PORT}`));
