import * as vscode from "vscode";
import { join } from "path";
import { getContent } from "./content";


export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		"learnxinyminutes.autoOpenTemplate",
		() => {
			const panel = vscode.window.createWebviewPanel(
				"markdown.preview",
				"Learn X in Y Minutes",
				vscode.ViewColumn.Beside,
				{
					enableScripts: true,
					enableFindWidget: true,
				}
			);

			const guidesRoot = vscode.Uri.file(join(context.extensionPath, "guides/c++.html.markdown"));
			const guidesPath = panel.webview.asWebviewUri(guidesRoot);
			const languageId = vscode.window.activeTextEditor?.document.languageId;
			panel.webview.html = getContent(context.extensionPath, languageId);
		}
	);

	context.subscriptions.push(disposable);
}

export function deactivate() { }
