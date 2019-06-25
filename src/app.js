import Koa from 'koa'
import Comercial from 'Comercial/routes'

const app = new Koa()
const port = 3024

app.use(Comercial)

app.listen(port, () => {
	console.log(`app is listening at ${port} port!`)
})