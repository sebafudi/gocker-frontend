<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let token;
  let user = {
    username: "",
    password: ""
  };
  const login = () => {
    fetch("http://sebafudi.pl:3000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        fetch("http://sebafudi.pl:3000/users/me", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + body.token
          }
        })
          .then(response => {
            return response.json();
          })
          .then(body => {
            if (typeof body.username !== "undefined") {
              user = {
                username: "",
                password: ""
              };
              dispatch("username", {
                text: body.username
              });
            }
          });
      });
  };
</script>

<form class="is-unselectable">
  <label class="label has-text-white has-text-centered">Username</label>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input
        class="input"
        type="text"
        placeholder="Username"
        bind:value={user.username} />
      <span class="icon is-small is-left">
        <i class="fas fa-user" />
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input
        class="input"
        type="password"
        placeholder="Password"
        bind:value={user.password} />
      <span class="icon is-small is-left">
        <i class="fas fa-lock" />
      </span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button
        class="button is-success is-fullwidth"
        on:click|preventDefault={login}>
        Login
      </button>
    </p>
  </div>
</form>
