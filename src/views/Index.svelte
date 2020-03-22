<script>
  import { navigateTo } from "svelte-router-spa";
  let hamburgerActive = false;
  function hamburgerToggle() {
    hamburgerActive = !hamburgerActive;
  }
  export let currentRoute;
  export let params;
  console.log({ currentRoute, params });
</script>

<style>
  .hero.is-info {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
      url("https://unsplash.it/1920/1080?random") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .hero .subtitle {
    padding: 3rem 0;
    line-height: 1.5;
  }
  .navbar {
    background-color: rgb(0, 0, 0, 0.8);
  }
  #navbarMenu {
    background-color: rgb(0, 0, 0, 0);
  }
</style>

<section class="hero is-info is-fullheight">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div
          class="navbar-brand is-unselectable"
          on:click={() => navigateTo('')}>
          <a class="navbar-item" href="javascript:;">
            <img src="https://i.imgur.com/oYOf9sR.png" alt="Logo" />
          </a>
          <span
            class="navbar-burger burger has-text-white"
            on:click={hamburgerToggle}
            data-target="navbarMenu">
            <span />
            <span />
            <span />
          </span>
        </div>
        <div
          id="navbarMenu"
          class="navbar-menu"
          class:is-active={hamburgerActive}>
          <div class="navbar-end">
            <span class="navbar-item">
              <button
                class="button is-white is-outlined is-fullwidth"
                on:click={() => navigateTo('login')}>
                <span class="icon">
                  <i class="fa fa-key" />
                </span>
                <span>Log In</span>
              </button>
            </span>
            <span class="navbar-item">
              <button
                class="button is-white is-outlined is-fullwidth"
                on:click={() => navigateTo('register')}>
                <span class="icon">
                  <i class="fa fa-pen" />
                </span>
                <span>Sign Up</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body is-overlay">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Lorem Ipsum</h1>
        <h2 class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          harum cupiditate minus illo at consequatur assumenda, perferendis
          vitae suscipit inventore ea id officiis ad magnam distinctio odio
          incidunt corrupti sapiente.
        </h2>
      </div>
    </div>
  </div>

</section>
