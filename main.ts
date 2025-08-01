// main.ts
import { Application, oakCors } from "./deps.ts";
import userRouter from "./routes/users.ts";

// 从环境变量中读取前端地址
const frontendOrigin = Deno.env.get("FRONTEND_ORIGIN") ?? "*";

const app = new Application();

// 使用 CORS 中间件，允许所有来源
app.use(oakCors({
  origin: frontendOrigin, // ⚠️ 根据你的前端地址设置
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });

