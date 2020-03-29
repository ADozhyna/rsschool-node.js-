const stream = require('stream');
const parse = require('./parseParam');
const caesar = require('./caesarCipher');

const program = parse.parse();
class Transform extends stream.Transform {
  _transform(chunk, encoding, callback) {
    callback(
      null,
      Buffer.from(caesar.caesarCipher(chunk.toString('utf-8'), program.shift))
    );
  }
}

module.exports = Transform;
