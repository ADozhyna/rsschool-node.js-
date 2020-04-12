const { BAD_REQUEST, getStatusText } = require('http-status-codes');
class ValidationError extends Error {
  constructor() {
    super();
    this.status = BAD_REQUEST;
    this.text = getStatusText(this.status);
  }
}

module.exports = ValidationError;
