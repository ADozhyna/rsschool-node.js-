const { program } = require('commander');
const path = require('path');

function parse() {
  program
    .option('-s, --shift <type>', 'a shift')
    .option('-i, --input <filename>', 'an input file')
    .option('-o, --output <filename>', 'an output file')
    .option('-a, --action <action>', 'an action encode/decode');

  program.parse(process.argv);
  if (program.action !== 'encode' && program.action !== 'decode') {
    console.error('action should be encode or decode');
    throw new Error('bad action');
  }
  if (isNaN(Number(program.shift))) {
    console.error('shift should be number');
    throw new Error('bad shift');
  }

  program.input = path.resolve(__dirname, program.input);
  program.output = path.resolve(__dirname, program.output);

  return program;
}

module.exports = { parse };
