<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes.js";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
  <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js">

  </script>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
    rel="stylesheet" />
  <style>
    html {
      overflow-y: auto !important;
    }
  </style>
</svelte:head>

<Router {routes} />
