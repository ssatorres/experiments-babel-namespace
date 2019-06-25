import Router from 'koa-router'
import { output } from '@/utils/crud'

const router = new Router({
	prefix: '/comercial'
})

router.get('/', async ctx => {
	output(ctx, true)
})

export default router.routes()