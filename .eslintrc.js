module.exports = {
  settings: {
    react: {
      version: "detect", // detect react version
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: "airbnb",
  rules: {
    "no-anonymous-exports-page-templates": "warn",
    "limited-exports-page-templates": "warn",
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
};
