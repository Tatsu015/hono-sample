import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text("hello 🔥"))

app.get('/user/:name', (c) => {
    const name = c.req.param('name')
    return c.json({ name: name })
})

app.get('/animal/:type?', (c) => {
    const id = c.req.param('type');
    return c.text('Animal: ' + String(id))
})

export default app;
