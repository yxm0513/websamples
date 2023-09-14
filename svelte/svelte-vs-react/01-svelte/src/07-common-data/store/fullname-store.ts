import { writable } from "svelte/store";

interface UserInfo {
  name: string;
  lastname: string;
}

export const FullnameStore = writable<UserInfo>({
  name: "John",
  lastname: "Doe",
});
