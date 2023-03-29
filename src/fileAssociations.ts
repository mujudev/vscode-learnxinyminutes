import { workspace as ws } from "vscode";

// key-value pairs from 'customMap' will win over those in 'presets'
const customAssociations: object = ws.getConfiguration('learnxinyminutes').get('customFileAssociations') || {};
const customMap = new Map(Object.entries(customAssociations));

// keys: vscode language ID
// values: template file prefix
const presets = new Map<string, string>([
    ["bibtex", "latex"],
    ["clojure", "clojure"],
    ["coffeescript", "coffeescript"],
    ["c", "c"],
    ["COBOL", "cobol"],
    ["cpp", "c++"],
    ["csharp", "csharp"],
    ["dockercompose", "docker"],
    ["css", "css"],
    ["cuda-cpp", "c++"],
    ["dockerfile", "docker"],
    ["elixir", "elixir"],
    ["elm", "elm"],
    ["erlang", "erlang"],
    ["fsharp", "fsharp"],
    ["git-commit", "git"],
    ["git-rebase", "git"],
    ["go", "go"],
    ["groovy", "groovy"],
    ["haml", "haml"],
    ["haskell", "haskell"],
    ["html", "html"],
    ["java", "java"],
    ["javascript", "javascript"],
    ["json", "json"],
    ["kotlin", "kotlin"],
    ["latex", "latex"],
    ["less", "less"],
    ["lua", "lua"],
    ["makefile", "make"],
    ["markdown", "markdown"],
    ["objective-c", "objective-c"],
    ["perl", "perl"],
    ["perl6", "perl"],
    ["php", "php"],
    ["powershell", "powershell"],
    ["python", "python"],
    ["r", "r"],
    ["ruby", "ruby"],
    ["rust", "rust"],
    ["scss", "css"],
    ["sass", "sass"],
    ["scala", "scala"],
    ["shellscript", "bash"],
    ["sql", "sql"],
    ["stylus", "stylus"],
    ["swift", "swift"],
    ["tex", "latex"],
    ["toml", "toml"],
    ["typescript", "typescript"],
    ["vb", "visualbasic"],
    ["xml", "xml"],
    ["yaml", "yaml"],
    ["zig", "zig"],
    ["CONTRIBUTING", "CONTRIBUTING"] // for if a language ID is not found
]);

export default new Map([...presets, ...customMap]);