import { Controller } from "egg";

export default class HomeController extends Controller {
  public async index() {
    // const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    await this.ctx.render("index.html");
  }
}
