const { use, expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
use(sinonChai);

global.expect = expect;
global.sinon = sinon;

global.window = {};

global.window.localStorage = {
  data: {},
  clear() {
    this.data = {};
  },
  setItem(key, value) {
    this.data[key] = JSON.stringify(value);
  },
  getItem(key) {
    const value = this.data[key];
    if (value) {
      return value;
    }
    return null;
  },
  removeItem(key) {
    delete this.data[key];
  },
};
