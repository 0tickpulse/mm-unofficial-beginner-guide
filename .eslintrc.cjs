/* eslint-env node */
module.exports = {
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@docusaurus/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "no-undef": "off", // TS Server
        "@typescript-eslint/no-unused-vars": "off", // TS Server
    }
};
