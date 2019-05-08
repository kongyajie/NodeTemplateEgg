const Service = require('egg').Service;

class TodoService extends Service {
  async queryAll() {
    return await this.app.mysql.select('todoList');
  }
  async delete(id) {
    return await this.app.mysql.delete('todoList', {id: id});
  }
  async create(params) {
    return await this.app.mysql.insert('todoList', params);
  }
  async alldone(params) {
    return await this.app.mysql.query(
      'update `todoList` set completed = ?',
      [params.flag || false]
    );
  }
  async setStatus(params) {
    const row = {
      id: params.id,
      completed: params.completed ? 1 : 0
    }
    return await this.app.mysql.update('todoList', row)
  }
  async removeCompleted() {
    return await this.app.mysql.delete('todoList', {
      completed: 1
    })
  }
}

module.exports = TodoService;