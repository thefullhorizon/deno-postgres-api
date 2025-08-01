// 管理项目的依赖项

// 由于生产环境是Deno将环境变量加载进运行环境中，使用Deno.env.get()来获得环境变量。
// 而本地开发时，使用dotenv来加载.env文件中的环境变量。综合考虑两种情况，
if (Deno.env.get("RAILWAY_ENVIRONMENT") === undefined) {
  // 本地环境 - 只在本地开发时加载 dotenv
  await import("https://deno.land/std@0.204.0/dotenv/load.ts");
}else {
  // 生产环境-Railway
}

export { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
export { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";

