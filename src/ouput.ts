import { z } from "../node_modules/@hono/zod-openapi/dist/index";
export const UserSchema = z.object({
    name: z.string().min(1).max(10).openapi({
      example:"Sumit"
    }),
    age: z.number().int().openapi({
      example:30
    }),
    id: z.string().min(1).max(10).openapi({
      example:"24"
    })
  })