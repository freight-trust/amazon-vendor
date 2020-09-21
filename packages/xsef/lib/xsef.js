'use strict';


const parse = require('json-safe-parse');

module.exports = (str) => {
  let json = str;

  if (typeof str === 'string') {
    const toParse = str.trim();
    if (toParse !== '') {
      json = parse(toParse, 'throw');
    } else {
      return {};
    }
  }

  if (/^(undefined|null)$/.test(json)) {
    return {};
  } else if (typeof json === 'object') {
    return json;
  }

  // it's some value
  throw new Error('INVALID XSEF FILE');
};

module.exports = xsef;

