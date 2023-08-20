import type { PageServerLoad } from './$types'

export const load = (async () => {
    return {
        title: 'My data',
        text: 'Hi mom!',
    }
}) satisfies PageServerLoad
