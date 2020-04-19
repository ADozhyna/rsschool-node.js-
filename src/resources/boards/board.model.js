const uuid = require('uuid');
const mongoose = require('mongoose');
/* class Board {
  constructor({
    id = uuid(),
    title = 'Border title',
    columns = [new Column(), new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

class Column {
  constructor({ id = uuid(), title = 'Column title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
} */

const columnSchema = new mongoose.Schema({
  title: String,
  order: Number,
  _id: {
    type: String,
    default: uuid
  }
});

const boardSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid
  },
  title: String,
  columns: [columnSchema]
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
