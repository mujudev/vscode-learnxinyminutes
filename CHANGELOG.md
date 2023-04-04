# Change Log

All notable changes to the "learnxinyminutes" extension will be documented in this file.

## [Unreleased]

- Webview content persistence on restart/reload using a serializer
- Text content localization
- Command that opens cheatsheet manually

## [0.2.0] - 2023-04-04

### Added

- Configuration: `Custom File Associations`
    - Custom cheatsheet associations for each languageId
- Command: `LearnXinYMinutes: Set File Association`

### Fixed
  - Webview page header now correctly displays associated cheatsheet

## [0.1.0] - 2023-03-27

### Added

- Ability to render cheatsheets in webview window
- Automatic file type recognition
- Command: `LearnXinYMinutes: Open Cheatsheet (auto)`
    - Uses automatic file type recognition to select and render cheatsheet in a webview