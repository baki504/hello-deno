import { createApp } from "./create_greet_app.ts";
import { superoak } from "https://deno.land/x/superoak@4.5.0/mod.ts";

const app = createApp();

Deno.test("GET /greet returs 200", async () => {
  const request = await superoak(app);
  await request.get("/greet").expect(200).expect("Hello anonymous!");
});
