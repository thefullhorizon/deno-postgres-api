// ========用于集中管理项目依赖========
// 处理本地.env中的环境变量，当导入std/dotenv时，系统会将.env文件中的变量加载到运行时环境变量（Deno.env）中
import "std/dotenv";
// 这是Deno项目中用于构建Web应用和API的工具，就像Node.js中的Express一样
export { Application, Router } from "oak" ;
// 这是Deno中用于连接PostgreSQL数据库的库
export { Client } from "postgres";

