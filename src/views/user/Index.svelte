<script>
  import NavBar from "../../components/NavBar.svelte";
  import SideMenu from "../../components/SideMenu.svelte";
  import { navigateTo } from "svelte-router-spa";
  import { user } from "../../stores.js";
  let userFromStore;

  const unsubscribe = user.subscribe(value => {
    userFromStore = value;
  });
</script>

<style>
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 16px;
    line-height: 1.5;
    height: 100%;
    background: #ecf0f3;
  }
  nav.navbar {
    border-top: 4px solid #276cda;
    margin-bottom: 1rem;
  }
  .navbar-item.brand-text {
    font-weight: 300;
  }
  .navbar-item,
  .navbar-link {
    font-size: 14px;
    font-weight: 700;
  }
  .columns {
    width: 100%;
    height: 100%;
    margin-left: 0;
  }
  .menu-label {
    color: #8f99a3;
    letter-spacing: 1.3;
    font-weight: 700;
  }
  .menu-list a {
    color: #0f1d38;
    font-size: 14px;
    font-weight: 700;
  }
  .menu-list a:hover {
    background-color: transparent;
    color: #276cda;
  }
  .menu-list a.is-active {
    background-color: transparent;
    color: #276cda;
    font-weight: 700;
  }
  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    margin-bottom: 2rem;
  }
  .card-header-title {
    color: #8f99a3;
    font-weight: 400;
  }
  .info-tiles {
    margin: 1rem 0;
  }
  .info-tiles .subtitle {
    font-weight: 300;
    color: #8f99a3;
  }
  .hero.welcome.is-info {
    background: #36d1dc;
    background: -webkit-linear-gradient(to right, #5b86e5, #36d1dc);
    background: linear-gradient(to right, #5b86e5, #36d1dc);
  }
  .hero.welcome .title,
  .hero.welcome .subtitle {
    color: hsl(192, 17%, 99%);
  }
  .card .content {
    font-size: 14px;
  }
  .card-footer-item {
    font-size: 14px;
    font-weight: 700;
    color: #8f99a3;
  }
  .card-footer-item:hover {
  }
  .card-table .table {
    margin-bottom: 0;
  }
  .events-card .card-table {
    max-height: 250px;
    overflow-y: scroll;
  }
</style>

<NavBar />
<div class="container">
  <div class="columns">
    <div class="column is-3 ">
      <SideMenu />
    </div>
    <div class="column is-9">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="../">Bulma</a>
          </li>
          <li>
            <a href="../">Templates</a>
          </li>
          <li>
            <a href="../">Examples</a>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">User</a>
          </li>
        </ul>
      </nav>
      <section class="hero is-info welcome is-small">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Hello, {userFromStore.user.username}.</h1>
            <h2 class="subtitle">I hope you are having a great day!</h2>
          </div>
        </div>
      </section>
      <section class="info-tiles">
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">439k</p>
              <p class="subtitle">Users</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">59k</p>
              <p class="subtitle">Products</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">3.4k</p>
              <p class="subtitle">Open Orders</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">19</p>
              <p class="subtitle">Exceptions</p>
            </article>
          </div>
        </div>
      </section>
      <div class="columns">
        <div class="column is-6">
          <div class="card events-card">
            <header class="card-header">
              <p class="card-header-title">Events</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div class="card-table">
              <div class="content">
                <table class="table is-fullwidth is-striped">
                  <tbody>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width="5%">
                        <i class="fa fa-bell-o" />
                      </td>
                      <td>Lorum ipsum dolem aire</td>
                      <td class="level-right">
                        <a class="button is-small is-primary" href="#">
                          Action
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">View All</a>
            </footer>
          </div>
        </div>
        <div class="column is-6">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Inventory Search</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-large" type="text" placeholder="" />
                  <span class="icon is-medium is-left">
                    <i class="fa fa-search" />
                  </span>
                  <span class="icon is-medium is-right">
                    <i class="fa fa-check" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">User Search</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                <div class="control has-icons-left has-icons-right">
                  <input class="input is-large" type="text" placeholder="" />
                  <span class="icon is-medium is-left">
                    <i class="fa fa-search" />
                  </span>
                  <span class="icon is-medium is-right">
                    <i class="fa fa-check" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
