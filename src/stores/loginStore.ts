import { writable } from 'svelte/store';

// The store object
export const loggedIn = writable<boolean>(false);
