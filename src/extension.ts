import * as vscode from "vscode";
import { getLanguageTemplate } from "./content";
import { presets } from "./fileAssociations";


export function activate(context: vscode.ExtensionContext) {
	let setFileAssociation = vscode.commands.registerCommand(
		"learnxinyminutes.setAssociation",
		async () => {
			const languageId = vscode.window.activeTextEditor?.document.languageId || "";
			const config = vscode.workspace.getConfiguration('learnxinyminutes');
			let customMap = config.get('customFileAssociations') || {};

			let options: vscode.QuickPickOptions = {
				title: "Set Custom Cheatsheet Association",
				onDidSelectItem: (item) => {
					customMap[languageId] = item;
					config.update('customFileAssociations', customMap);
				}
			};

			const items = Array.from(presets.keys());
			vscode.window.showQuickPick(items, options);
		}
	);

	let autoOpen = vscode.commands.registerCommand(
		"learnxinyminutes.autoOpen",
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

	context.subscriptions.push(setFileAssociation, autoOpen);
}

export function deactivate() { }
