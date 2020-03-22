import Index from "./views/Index.svelte";
import LoginPage from "./views/LoginPage.svelte";
import RegisterPage from "./views/RegisterPage.svelte";
import userIndex from "./views/user/Index.svelte";
import { user } from "./stores.js";

// user.update(n => ({
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJzdWIiOiIwMGY0YTk0Ni1hMzAwLTQwZmUtYmY3Ni1hNDJmNjdkMzdjOWMiLCJpYXQiOjE1ODQ3OTYyNDUsImV4cCI6MTU4NDgwMzQ0NX0.fNARQrdGxLEYK3sB2j0NiMh8zXEdpnrXLEfCv1RltsY",
//   user: {
//     id: "00f4a946-a300-40fe-bf76-a42f67d37c9c",
//     email: "test@gmail.com",
//     username: "test",
//     groups: [],
//     ownedGroups: []
//   }
// }));
user.logout();
let userFromStore;
const unsubscribe = user.subscribe(value => {
  userFromStore = value;
});

function userIsLogged() {
  if (userFromStore.token === "") {
    return false;
  } else {
    return true;
  }
}

function userIsNotLogged() {
  return !userIsLogged();
}

export const routes = [
  {
    name: "/",
    component: Index
  },
  {
    name: "login",
    component: LoginPage,
    onlyIf: { guard: userIsNotLogged, redirect: "/user" }
  },
  {
    name: "register",
    component: RegisterPage,
    onlyIf: { guard: userIsNotLogged, redirect: "/user" }
  },
  {
    name: "user",
    component: userIndex,
    onlyIf: { guard: userIsLogged, redirect: "/login" }
  }
];
