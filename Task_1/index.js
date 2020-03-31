const stream = require('stream');
const fs = require('fs');
const Transform = require('./caesar');
const parse = require('./parseParam');

const program = parse.parse();

function init() {
  let readStream;
  let writeStream;

  if (program.input === undefined) {
    readStream = process.stdin;
  } else {
    readStream = fs.createReadStream(program.input);
  }

  if (program.output === undefined) {
    writeStream = process.stdout;
  } else {
    writeStream = fs.createWriteStream(program.output, { flags: 'a' });
  }

  if (program.action === 'encode') {
    program.shift = Number(program.shift);
  } else if (program.action === 'decode') {
    program.shift = -1 * Number(program.shift);
  }

  stream.pipeline(readStream, new Transform(), writeStream, err => {
    if (err) {
      process.stderr.write('File not found, check path.');
      // process.exit(400);
    } else console.log('Finished!');
  });
}

init();
