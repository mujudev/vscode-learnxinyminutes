import * as vscode from "vscode";
import { join } from "path";
import { getLanguageTemplate } from "./content";


export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		"learnxinyminutes.autoOpenTemplate",
		() => {
			const languageId = vscode.window.activeTextEditor?.document.languageId || "";
			const panelTitle = "Learn " + languageId[0].toUpperCase() + languageId.slice(1);
			const panel = vscode.window.createWebviewPanel(
				"markdown.preview",
				panelTitle,
				{
					preserveFocus: true,
					viewColumn: vscode.ViewColumn.Beside,
				},
				{
					enableScripts: true,
					enableFindWidget: true,
				}
			);

			panel.webview.html = getLanguageTemplate(context.extensionPath, languageId);
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }
