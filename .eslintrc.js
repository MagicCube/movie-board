module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "no-underscore-dangle": [
      "off"
    ],
    "no-use-before-define": [
      "off"
    ],
    "comma-dangle": [
      "off"
    ],
    "import/no-extraneous-dependencies": [
      "off"
    ]
  },
  "globals": {
    "$": true
  }
};
