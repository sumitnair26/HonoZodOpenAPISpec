import { createRoute } from '../node_modules/@hono/zod-openapi/dist/index';
import { ParamsSchema } from './input';
import { UserSchema } from './ouput';

const getUserRoute = createRoute({
  method: 'get',
  path:'/user/{id}',
  request:{
    params: ParamsSchema
  },
  responses:{
    200:{
      content:{
        'application/json':{
          schema: UserSchema
        }
      },
      description: "Get the users details"
    }
  }
})



export default app
