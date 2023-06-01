import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { LOGIN, PASSWORD } from '$env/static/private';

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const login = formData.get('login');
		const password = formData.get('password');

		if (login !== LOGIN || password !== PASSWORD) {
			return fail(400, { login, incorrect: true });
		}

		cookies.set('access', 'true', { path: '/', sameSite: 'strict' });
		throw redirect(303, '/admin');

		return { success: true };
	}
};
