<script>
  import { navigateTo } from "svelte-router-spa";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let data = {
    email: "",
    password: "",
    checkbox: false
  };
  function submit() {
    if (data.email && data.password) {
      console.log(login(data));
    }
  }
  export let currentRoute;
  export let params;
  console.log({ currentRoute, params });

  let loading = false;
  const login = async data => {
    loading = true;
    let userDTO = {
      email: data.email,
      password: data.password
    };
    fetch("http://sebafudi.pl:3000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDTO)
    })
      .then(response => {
        return response.json();
      })
      .then(body => {
        loading = false;
      });
  };
</script>

<style>
  .hero.is-success {
    background: #f2f6fa;
  }
  .box {
    margin-top: 5rem;
  }
  input {
    font-weight: 300;
  }
  p {
    font-weight: 700;
  }
  .has-text-black {
    color: black;
  }
  .field {
    padding-bottom: 10px;
  }
  .avatar {
    margin-top: -70px;
    padding-bottom: 20px;
  }
  .avatar img {
    width: 128px;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
</style>

<section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-black is-unselectable">
          Log in to your account
        </h3>
        <div class="box">
          <figure class="avatar is-unselectable">
            <img src="favicon.png" alt="gocker" />
          </figure>
          <form>
            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-unselectable"
                  type="email"
                  placeholder="Your Email"
                  bind:value={data.email} />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-unselectable"
                  type="password"
                  placeholder="Your Password"
                  bind:value={data.password} />
              </div>
            </div>
            <div class="field">
              <label class="checkbox is-size-5">
                <input type="checkbox" bind:checked={data.checkbox} />
                Remember me
              </label>
            </div>
            <button
              id="logIn"
              class="button is-block is-info is-large is-fullwidth"
              class:is-loading={loading}
              on:click|preventDefault={submit}>
              Log In
            </button>
          </form>
        </div>
        <p class="has-text-grey">
          <a href="javascript:;" on:click={() => navigateTo('register')}>
            Sign Up
          </a>
          &nbsp;·&nbsp;
          <a href="javascript:;" on:click={() => navigateTo('')}>
            Forgot Password
          </a>
          &nbsp;·&nbsp;
          <a href="javascript:;" on:click={() => navigateTo('')}>Homepage</a>
        </p>
      </div>
    </div>
  </div>
</section>
