/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Duplicate plugin/preset detected.\\nIf you'd like to use two separate instances of a plugin,\\nthey need separate names, e.g.\\n\\n  plugins: [\\n    ['some-plugin', {}],\\n    ['some-plugin', {}, 'some unique name'],\\n  ]\\n\\nDuplicates detected are:\\n[\\n  {\\n    \\\"alias\\\": \\\"D:\\\\\\\\phpstudy\\\\\\\\WWW\\\\\\\\lecturedemo\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\@babel\\\\\\\\plugin-proposal-class-properties\\\\\\\\lib\\\\\\\\index.js\\\",\\n    \\\"dirname\\\": \\\"D:\\\\\\\\phpstudy\\\\\\\\WWW\\\\\\\\lecturedemo\\\\\\\\webpack\\\",\\n    \\\"ownPass\\\": false,\\n    \\\"file\\\": {\\n      \\\"request\\\": \\\"@babel/plugin-proposal-class-properties\\\",\\n      \\\"resolved\\\": \\\"D:\\\\\\\\phpstudy\\\\\\\\WWW\\\\\\\\lecturedemo\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\@babel\\\\\\\\plugin-proposal-class-properties\\\\\\\\lib\\\\\\\\index.js\\\"\\n    }\\n  },\\n  {\\n    \\\"alias\\\": \\\"D:\\\\\\\\phpstudy\\\\\\\\WWW\\\\\\\\lecturedemo\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\@babel\\\\\\\\plugin-proposal-class-properties\\\\\\\\lib\\\\\\\\index.js\\\",\\n    \\\"options\\\": {\\n      \\\"loose\\\": true\\n    },\\n    \\\"dirname\\\": \\\"D:\\\\\\\\phpstudy\\\\\\\\WWW\\\\\\\\lecturedemo\\\\\\\\webpack\\\",\\n    \\\"ownPass\\\": false,\\n    \\\"file\\\": {\\n      \\\"request\\\": \\\"@babel/plugin-proposal-class-properties\\\",\\n      \\\"resolved\\\": \\\"D:\\\\\\\\phpstudy\\\\\\\\WWW\\\\\\\\lecturedemo\\\\\\\\webpack\\\\\\\\node_modules\\\\\\\\@babel\\\\\\\\plugin-proposal-class-properties\\\\\\\\lib\\\\\\\\index.js\\\"\\n    }\\n  }\\n]\\n    at assertNoDuplicates (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:206:13)\\n    at createDescriptors (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:114:3)\\n    at createPluginDescriptors (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:105:10)\\n    at D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:63:53\\n    at cachedFunction (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\caching.js:62:27)\\n    at cachedFunction.next (<anonymous>)\\n    at evaluateSync (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:251:28)\\n    at sync (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:89:14)\\n    at plugins (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:28:77)\\n    at mergeChainOpts (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:415:26)\\n    at D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:374:7\\n    at Generator.next (<anonymous>)\\n    at buildRootChain (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:73:36)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\partial.js:101:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\partial.js:140:25\\n    at Generator.next (<anonymous>)\\n    at step (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at evaluateAsync (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:291:5)\\n    at D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:93:9\\n    at new Promise (<anonymous>)\\n    at async (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\gensync\\\\index.js:92:14)\\n    at Object.<anonymous> (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:155:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:3:103)\\n    at _next (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:5:194)\\n    at D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (D:\\\\phpstudy\\\\WWW\\\\lecturedemo\\\\webpack\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:5:97)\");\n\n//# sourceURL=webpack://webpack/./src/index.js?");
/******/ })()
;