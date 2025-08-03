// routes/users.ts
import { Router } from "../deps.ts";
import client from "../db.ts";

const router = new Router();

// 获取所有用户操作
router.get("/users", async (ctx) => {
  const result = await client.queryObject("SELECT * FROM user_actions ORDER BY id DESC");
  ctx.response.body = result.rows;
});

// 创建新用户记录
router.post("/users", async (ctx) => {
  const body = await ctx.request.body({ type: "json" }).value;
  const { user_name, user_action } = body;

  if (!user_name || !user_action) {
    ctx.response.status = 400;
    ctx.response.body = { error: "user_name 和 user_action 不能为空" };
    return;
  }

  await client.queryObject(
    "INSERT INTO user_actions (user_name, user_action) VALUES ($1, $2)",
    [user_name, user_action],
  );

  ctx.response.status = 201;
  ctx.response.body = { message: "用户操作创建成功" };
});

// 更新指定 ID 的用户记录
router.put("/users/:id", async (ctx) => {
  const id = ctx.params.id;
  const body = await ctx.request.body({ type: "json" }).value;
  const { user_name, user_action } = body;

  if (!user_name || !user_action) {
    ctx.response.status = 400;
    ctx.response.body = { error: "user_name 和 user_action 不能为空" };
    return;
  }

  await client.queryObject(
    "UPDATE user_actions SET user_name = $1, user_action = $2 WHERE id = $3",
    [user_name, user_action, id],
  );

  ctx.response.body = { message: "用户操作更新成功" };
});

// 删除指定 ID 的用户记录 这里的 :id 是一个路径参数占位符
router.delete("/users/:id", async (ctx) => {
  const id = ctx.params.id;
  await client.queryObject("DELETE FROM user_actions WHERE id = $1", [id]);
  ctx.response.body = { message: "用户操作删除成功" };
});

export default router;
