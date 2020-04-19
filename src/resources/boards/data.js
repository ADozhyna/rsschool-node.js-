const Board = require('./board.model');

exports.boards = [
  new Board({
    title: 'Title_one',
    columns: [
      { title: 'Column one', order: 1 },
      { title: 'Column two', order: 2 }
    ]
  }),
  new Board({
    title: 'Title_two',
    columns: [
      { title: 'Column one', order: 1 },
      { title: 'Column', order: 0 }
    ]
  })
];
