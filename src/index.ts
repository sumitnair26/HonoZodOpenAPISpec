import { createRoute, OpenAPIHono } from '../node_modules/@hono/zod-openapi/dist/index';
import { ParamsSchema } from './input';
import { UserSchema } from './ouput';
const app = new OpenAPIHono()

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

const postUserRoute = createRoute({
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


app.openapi(getUserRoute, (c:any)=> {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age:30,
    name:"Sumit Nair"
  })
})

app.openapi(postUserRoute, (c:any)=> {
  const { id } = c.req.valid("param");
  return c.json({
    id,
    age:30,
    name:"Sumit Nair"
  })
})

// The OpenAPI documentation will be available at /doc
app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})

export default app;
