// db.ts
import { Client } from "./deps.ts";

const client = new Client(Deno.env.get("DATABASE_URL")!);
await client.connect();

export default client;
