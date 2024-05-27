//Inputs from the users on the route

import { z } from "../node_modules/@hono/zod-openapi/dist/index";
export const ParamsSchema = z.object({
    id:z.string().min(1).max(10).openapi({
      param:{
        name:"id",
        in:"path"
      },
      example: "123"
    })
  })