module.exports = {
    root: true,
    parser: "babel-eslint",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb-base"
    ],
    plugins: [
      "react",
      "react-hooks"
    ],
    rules: {
      "arrow-body-style": "warn",
      "no-use-before-define": ["error", { "variables": false }],
      "react/prop-types": ["error", { "ignore": ["navigation"] }],
      "react-hooks/exhaustive-deps": "warn",
      "class-methods-use-this": ["error", {
        "exceptMethods": [
          "render",
          "getInitialState",
          "getDefaultProps",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ]
      }]
    },
    globals: {
      "alert": true,
      "fetch": true
    },
  };
  