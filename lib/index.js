'use strict';

var createRecognizer = require('routility-util');

/**
 * Take route definition created by Routility, return a express
 * middleware you can mount to express app
 *
 * @param {RouteDefinition} definition
 *
 * @return {middleware} An instance of express Router
 */
function createRouter(definition) {
  var recongnize = createRecognizer(definition);
  return function (req, res, next) {
    req.routilityState = recongnize(req.url);
    next();
  };
}

module.exports = {
  createRouter: createRouter,
};
