
import { z } from "../node_modules/@hono/zod-openapi/dist/index";

//Inputs from the users on the route
const PramsSchema = z.object({
  id:z.string().min(1).max(10).openapi({
    param:{
      name:"id",
      in:"path"
    },
    example: "123"
  })
})

const UserSchema = z.object({
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

export default app
