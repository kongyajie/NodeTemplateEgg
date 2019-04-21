const { Controller } = require('egg');
class BaseController extends Controller {

  success(data) {
    if(data) {
      this.ctx.body = {
        code: 1,
        body: data,
        meta: {}
      };
    }else {
      this.ctx.body = {
        code: 0,
        msg: 'fail'
      };
    }
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;