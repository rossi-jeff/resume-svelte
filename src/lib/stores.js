import { writable } from 'svelte/store';

/** @type {{ text: string; href?: string; }[]} */
let trail = [];

export const breadcrumbs = writable(trail);
