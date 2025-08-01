// routes/users.ts
import { Router } from "../deps.ts";
import client from "../db.ts";

const router = new Router();

router.get("/users", async (ctx) => {
  const result = await client.queryArray("SELECT * FROM user_action LIMIT 2");
  ctx.response.body = result.rows;
});

export default router;
