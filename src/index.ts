import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text("hello 🔥"))
app.get('/user/:name', (c) => {
    const name = c.req.param('name')
    return c.json({ name: name })
})

export default app;
