const Controller = require('../core/base_controller');

class TodoController extends Controller {
  //查询数据库所有数据
  async getAll () {
    const { ctx, app } = this;
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }

  // 创建任务
  async createTodo () {
    const { ctx, app } = this;
    await ctx.service.todo.create(ctx.request.body);
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }

  //按照id来删除某条数据
  async deleteTodo () {
    const { ctx, app } = this;
    await ctx.service.todo.delete(ctx.params.id);
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }
}

module.exports = TodoController;