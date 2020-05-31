/* eslint-disable no-useless-escape */

export default class Validator {
  static validateUserName(name) {
    if (name.match(/^([a-z0-9_\-]+)$/gi) === null) {
      return 'error 1';
    }

    if (name.match(/^[0-9_\-]/gi) !== null) {
      return 'error 2';
    }

    if (name.match(/([\-_0-9])$/gi) !== null) {
      return 'error 3';
    }

    if (name.match(/\w+([0-9_\-])([0-9_\-])([0-9_\-])\w+/gi) !== null) {
      return 'error 4';
    }

    return 'correct';
  }
}
