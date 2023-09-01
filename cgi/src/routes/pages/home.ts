import * as express from "express";

export function build(req: express.Request, res: express.Response): boolean {
    const _default: ReturnType<typeof build> = false as boolean;

    try {
        res.send("Hello, World!");
        return true;
    } catch (e: unknown) {
        console.error(e);
        res.send("ERROR!");
        return _default;
    }
}
