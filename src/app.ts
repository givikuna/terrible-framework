import "./style.css";

import * as $ from "jquery";

const componentsContext: __WebpackModuleApi.RequireContext = require.context("./pages", true, /\.ts$/);

componentsContext.keys().forEach((componentPath: string) => {
    import(componentPath)
        .then((module: string) => {
            $("#app").append(module);
        })
        .catch((error: unknown) => {
            console.error(`Error importing ${componentPath}:`, error);
        });
});
