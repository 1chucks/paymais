import { Hono } from "hono";

const app = new Hono();

export const indexRoutes = app.get("/", async (c) => {
	// try {
	//   const data = await db.query.posts.findMany({
	//     with: {
	//       comments: true,
	//       user: true,
	//     },
	//   });
	//   return c.json({
	//     data,
	//   });
	// } catch (error) {
	//   return c.json({ error });
	// }
	return c.json({
		msg: "Hello World",
	});
});
