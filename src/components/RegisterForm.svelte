<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let user = {
    username: "",
    password: ""
  };
  const login = () => {
    fetch("http://sebafudi.pl:3000/auth/register", {
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
        if (typeof body.token !== "undefined") {
          user = {
            username: "",
            password: ""
          };
          dispatch("token", {
            text: body.token
          });
        }
      });
  };
</script>

<form class="is-unselectable">
  <label class="label has-text-white has-text-centered">Register</label>
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
        Register
      </button>
    </p>
  </div>
</form>
