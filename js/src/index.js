export default {
	async fetch(request, env, ctx) {
		return new Response(`${env.GREETING}`);
	},
};
