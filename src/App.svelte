<script>
  import LoginForm from "./components/LoginForm.svelte";
  import RegisterForm from "./components/RegisterForm.svelte";
  let userToken = "";
  function handleUserToken(event) {
    userToken = event.detail.text;
  }
  let username = "";
  function handleUserUsername(event) {
    username = event.detail.text;
  }
  function logOut() {
    userToken = "";
    username = "";
  }
</script>

<style>
  .forms {
    padding: 1em;
    max-width: 240px;
  }
  .token {
    word-break: break-all;
  }
  .columns {
    height: 100%;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js">

  </script>
  <style>
    html {
      overflow-y: auto !important;
    }
  </style>
</svelte:head>

<div class="columns is-vcentered is-gapless has-background-black-ter">
  <div class="column is-7">
    <img
      class="is-pulled-right"
      src="https://media.discordapp.net/attachments/689541682697470147/689845949085909055/1JfSp7LWmVE1nj15IrxWSWQ.png?width=1014&height=678"
      alt=""
      width="75%" />
  </div>
  <div class="column">
    <div class="forms">
      {#if userToken || username}
        <div class="token has-text-white">
          Your
          {#if userToken !== ''}token{:else}username{/if}
          is:
          {#if userToken !== ''}{userToken}{:else}{username}{/if}
        </div>
        <br />
        <button class="button is-danger is-fullwidth" on:click={logOut}>
          Logout
        </button>
      {:else}
        <LoginForm on:username={handleUserUsername} />
        <br />
        <RegisterForm on:token={handleUserToken} />
      {/if}
    </div>
  </div>
</div>
