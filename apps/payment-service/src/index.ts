import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { clerkMiddleware } from "@hono/clerk-auth";


const app = new Hono()
app.use("*", clerkMiddleware());


app.get('/', (c) => {
  return c.text('payment service is running on port 8002')
})

const start = async () => {
  try {
    serve({
      fetch: app.fetch,
      port: 8002,
    })
    console.log(`Server is running on http://localhost:8002`)
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start()
