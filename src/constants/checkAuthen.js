import { LOCAL } from "./localStorage";

export let checkAuthen = !!localStorage.getItem(LOCAL.token);
