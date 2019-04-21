module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/todo/queryAll', controller.todo.getAll);
  router.post('/api/todo/create', controller.todo.createTodo);
  router.post('/api/todo/delete/:id', controller.todo.deleteTodo);
};