import { writable } from "svelte/store";

export let user = writable(null);
export let error_msg = writable(null);
