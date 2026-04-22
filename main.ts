import { Hono } from "@hono/hono";

const app = new Hono().basePath("/api");

app.get("/health", function (ctx) {
  return ctx.json({ message: "ok" });
});

export default app;
