import {
  Application,
  helpers,
  Router,
} from "https://deno.land/x/oak@v7.7.0/mod.ts";
// ❶
export function createApp(): Application {
  const app = new Application();
  const router = new Router(); // ❷
  // ❸
  router.get("/greet", (ctx) => {
    const { name = "anonymous" } = helpers.getQuery(ctx); // ❹
    ctx.response.body = `Hello ${name}!`; // ❺
  });
  app.use(router.routes()); // ❻
  return app;
}
