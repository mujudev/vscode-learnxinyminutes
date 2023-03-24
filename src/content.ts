import { Uri } from "vscode";
import * as fs from 'fs';
import * as path from 'path';


export function getContent(extensionPath: string, languageId: string | undefined): string {
    console.log(languageId);

    let guide = "guides/";
    if (languageId === "python") {
        guide += "python.html";
    } else if (languageId === "bash") {
        guide += "bash.html";
    } else if (languageId === "typescript") {
        guide += "typescript.html";
    } else {
        guide += "bash.html";
    }

    const guidePath = path.join(extensionPath, guide);
    const content: string = fs.readFileSync(guidePath, 'utf8');

    return `
        <!doctype html>
        <html lang="en">

        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Learn X in Y Minutes</title>
            <link rel="stylesheet" href="https://esm.sh/@wooorm/starry-night@1/style/both.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-dark.min.css" integrity="sha512-Mo2QuokS9Y0JOuzVLUh3o9A07RqSXcpc2KC9LXxOwfaBgPt8ZHRiDfGQ2+tZw7xIno+ViWipTNLg1StC6TmwMA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>

        <body>
            ${content}
        </body>
    `;
}