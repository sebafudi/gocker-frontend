import { writable } from "svelte/store";

function createUser() {
  const { subscribe, set, update } = writable(0);
  const structure = {
    token: "",
    user: {
      id: "",
      email: "",
      username: "",
      groups: [],
      ownedGroups: []
    }
  };
  set(structure);
  return {
    subscribe,
    update,
    logout: () => set(structure)
  };
}

export let user = createUser();
