declare const xingqiuController: {
    getAllXingqius(ctx: Context): Promise<void>;
    getXingqiuById(ctx: Context): Promise<void>;
    createXingqiu(ctx: Context): Promise<void>;
    updateXingqiu(ctx: Context): Promise<void>;
    deleteXingqiu(ctx: Context): Promise<void>;
};
export default xingqiuController;
