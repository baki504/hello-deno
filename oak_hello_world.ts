import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
const app = new Application(); // ❶
app.use((ctx) => { // ❷
  ctx.response.body = "Hello world!"; // ❸
});
await app.listen({ port: 8888 });
