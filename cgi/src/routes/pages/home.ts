import * as express from "express";

export function build(req: express.Request, res: express.Response) {
    try {
        res.send("Hello, World!");
    } catch (e: unknown) {
        console.error(e);
        res.send("");
    }
}
