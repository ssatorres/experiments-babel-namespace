export function output (ctx, data) {
	ctx.is('application/json')
	ctx.body = ({
		success: true,
		data
	})
}