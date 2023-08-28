import { LOCAL } from "./localStorage";

export const checkAuthen = !!localStorage.getItem(LOCAL.token);
