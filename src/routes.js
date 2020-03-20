import Index from "./views/Index.svelte";
import LoginPage from "./views/LoginPage.svelte";
import RegisterPage from "./views/RegisterPage.svelte";
import userIndex from "./views/user/Index.svelte";
import { Route } from "svelte-router-spa";

function userIsLogged() {
  return true;
}

export const routes = [
  {
    name: "/",
    component: Index
  },
  { name: "login", component: LoginPage },
  { name: "register", component: RegisterPage },
  {
    name: "user",
    component: userIndex,
    onlyIf: { guard: userIsLogged, redirect: "/login" }
  }
];
