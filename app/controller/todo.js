const Controller = require('../core/base_controller');

class TodoController extends Controller {
  // 查询数据库所有数据
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

  // 按照id来删除某条数据
  async deleteTodo () {
    const { ctx, app } = this;
    await ctx.service.todo.delete(ctx.params.id);
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }

  // 全部设为已完成/未完成
  async allDone () {
    const { ctx, app } = this;
    await ctx.service.todo.alldone(ctx.request.body);
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }

  // 设置一条项目的状态
  async setStatus () {
    const { ctx } = this;
    await ctx.service.todo.setStatus(ctx.request.body);
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }

  // 删除所有已完成的项目
  async removeCompleted() {
    const { ctx } = this;
    await ctx.service.todo.removeCompleted();
    let resultAll = await ctx.service.todo.queryAll();
    this.success(resultAll);
  }
}

module.exports = TodoController;