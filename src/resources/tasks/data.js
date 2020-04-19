const Task = require('./task.model');

exports.tasks = [
  new Task({
    title: 'title task',
    order: 2,
    description: '',
    userId: 'userId', // assignee
    boardId: 'boardId',
    columnId: 'columnId'
  }),
  new Task({
    title: 'title task',
    order: 1,
    description: '',
    userId: 'userId', // assignee
    boardId: 'boardId',
    columnId: 'columnId'
  }),
  new Task({
    title: 'title task',
    order: 3,
    description: 'desc',
    userId: 'userId', // assignee
    boardId: 'boardId',
    columnId: 'columnId'
  })
];
