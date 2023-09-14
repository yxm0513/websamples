import { writable } from "svelte/store";

export const createUserStore = () => writable("John");
