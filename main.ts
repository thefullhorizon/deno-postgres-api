// main.ts
import { Application } from "./deps.ts";
import userRouter from "./routes/users.ts";

const app = new Application();
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });

