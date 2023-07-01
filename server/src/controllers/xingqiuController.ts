import { Context } from 'koa';
import Xingqiu, { IXingqiu } from '../models/xingqiu';

const xingqiuController = {
  async getAllXingqius(ctx: Context) {
    // console.log("ctx.body.xingqiu");
    try {
      const xingqius: IXingqiu[] = await Xingqiu.find({}).populate('author');
      ctx.status = 200;
      ctx.body = xingqius;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async getXingqiuById(ctx: Context) {
    const { id } = ctx.params;

    try {
      const xingqiu: IXingqiu | null = await Xingqiu.findById(id);
      if (!xingqiu) {
        ctx.throw(404, 'Xingqiu not found');
      }
      ctx.status = 200;
      ctx.body = xingqiu;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async createXingqiu(ctx: Context) {
    const { album, title, author } = ctx.request.body;
    try {
      const newXingqiu: IXingqiu = new Xingqiu({
        album,
        title,
        author,
      });
      await newXingqiu.save();
      ctx.status = 201;
      ctx.body = newXingqiu;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async updateXingqiu(ctx: Context) {
    const { id } = ctx.params;
    const { album, title, author } = ctx.request.body;

    try {
      const updatedXingqiu: IXingqiu | null = await Xingqiu.findByIdAndUpdate(id, {
        album,
        title,
        author,
      }, { new: true });
      if (!updatedXingqiu) {
        ctx.throw(404, 'Xingqiu not found');
      }
      ctx.status = 200;
      ctx.body = updatedXingqiu;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async deleteXingqiu(ctx: Context) {
    const { id } = ctx.params;

    try {
      const deletedXingqiu: IXingqiu | null = await Xingqiu.findByIdAndDelete(id);
      if (!deletedXingqiu) {
        ctx.throw(404, 'Xingqiu not found');
      }
      ctx.status = 200;
      ctx.body = { message: 'Xingqiu deleted successfully' };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};

export default xingqiuController;
