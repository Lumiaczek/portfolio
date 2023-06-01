import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const access = cookies.get('access');

	if (!access || access === null) {
		return {
			success: false
		};
	}

	return {
		success: true
	};
}) satisfies PageServerLoad;
