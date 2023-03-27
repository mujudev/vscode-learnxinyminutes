import { presets } from "./languages";
import * as fs from 'fs';
import * as path from 'path';


export function getLanguageTemplate(extensionPath: string, languageId: string): string {
    let errorMsg = "";
    if (!presets.has(languageId)) {
        let gap = "<br><br><br><br><br>"; // lol
        errorMsg = `<h2>Uh, oh! It looks like there is no cheatsheet associated with this file type.</h2>${gap}<hr>`;
    }

    const prefix = presets.get(languageId) || "CONTRIBUTING";
    const templatePath = path.join(extensionPath, "templates/", prefix + ".html");
    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    return generateHTML(errorMsg + templateHtml);
}

function generateHTML(templateHtml: string): string {
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
            ${templateHtml}
        </body>
    `;
}
