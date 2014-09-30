/** @module */
'use strict'

exports.getLocale = function(locale) {
  return require('./lang/' + locale);
};

module.exports = exports;
