import { createTRPCRouter } from "~/server/api/trpc";
import { postRouters } from "./routers/posts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  posts: postRouters,
});

// export type definition of API
export type AppRouter = typeof appRouter;
