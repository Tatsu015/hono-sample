import { Hono } from 'hono'

const app = new Hono()

type User = { id: number, name: string }

let table: User[] = [
    { id: 1, name: 'Aaa' }
]

app.get('/', (c) => c.json(table))

app.get('/user/:id', (c) => {
    const id = Number(c.req.param('id'))
    if (!id) {
        return c.json('no user')
    }
    const user = table.find((t) => t.id === id)
    if (!user) {
        return c.json('no user')
    }
    return c.json(user)
})

app.post('/user', async (c) => {
    const param = await c.req.json<{ name: string }>
    console.log(param)
    const user: User = {
        id: table.length + 1,
        name: param.name,
    };
    table.push(user)
    return c.json('success')
})

export default app;
