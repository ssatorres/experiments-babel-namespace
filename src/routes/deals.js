import Router from 'koa-router'
import { output } from '@/utils/crud'

const router = new Router({
	prefix: '/deals'
})

router.get('/opened', async ctx => {
	output(ctx, [
		{
			id: 1,
			home: 'vasco',
			away: 'flamengo',
			date: '10/15/2018'
		},
		{
			id: 2,
			home: 'botafogo',
			away: 'fluminense',
			date: '10/20/2018'
		},
		{
			id: 3,
			home: 'são paulo',
			away: 'palmeiras',
			date: '10/20/2018'
		}
	])
})

export default router.routes()