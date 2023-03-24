// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { join } from "path";
import { getContent } from "./content";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand

	// The commandId parameter must match the command field in package.json



	let disposable = vscode.commands.registerCommand(
		"learnxinyminutes.helloWorld",
		() => {
			const guidesRoot = vscode.Uri.file(join(context.extensionPath, "guides/c++.html.markdown"));
			console.log(join(context.extensionPath, "guides/c++.html.markdown"));
			vscode.window.showInformationMessage(
				"Hello World from learnxinyminutes!"
			);

			const panel = vscode.window.createWebviewPanel(
				"markdown.preview",
				"Learn X in Y Minutes",
				vscode.ViewColumn.Beside,
				{
					enableScripts: true,
					enableFindWidget: true,
				}
			);

			const guidesPath = panel.webview.asWebviewUri(guidesRoot);

			const languageId = vscode.window.activeTextEditor?.document.languageId;

			panel.webview.html = getContent(context.extensionPath, languageId);
			// panel.reveal();
		}
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
