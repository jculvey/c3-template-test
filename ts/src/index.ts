export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		return new Response(`${env.GREETING}`);
	},
};
