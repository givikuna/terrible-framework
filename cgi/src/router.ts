import * as express from "express";

import { build as homeRouteHandler } from "./routes/pages/home";

const router: express.Router = express.Router();

router.get("/build", homeRouteHandler);

export default router;
