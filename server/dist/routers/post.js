"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const postController_1 = require("../controllers/postController");
const router = new router_1.default();
router.get('/posts', postController_1.getPosts);
router.get('/posts/:id', postController_1.getPost);
router.post('/posts', postController_1.createPost);
router.put('/posts/:id', postController_1.updatePost);
router.delete('/posts/:id', postController_1.deletePost);
exports.default = router;
//# sourceMappingURL=post.js.map