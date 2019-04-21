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
}

module.exports = TodoService;