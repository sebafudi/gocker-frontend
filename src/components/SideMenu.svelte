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

<aside class="menu is-hidden-mobile">
  <p class="menu-label">General</p>
  <ul class="menu-list">
    <li>
      <a class="is-active">Dashboard</a>
    </li>
    <li>
      <a>Customers</a>
    </li>
    <li>
      <a>Other</a>
    </li>
  </ul>
  <p class="menu-label">Administration</p>
  <ul class="menu-list">
    <li>
      <a>Team Settings</a>
    </li>
    <li>
      <a>Manage Your Team</a>
      <ul>
        <li>
          <a>Members</a>
        </li>
        <li>
          <a>Plugins</a>
        </li>
        <li>
          <a>Add a member</a>
        </li>
        <li>
          <a>Remove a member</a>
        </li>
      </ul>
    </li>
    <li>
      <a>Invitations</a>
    </li>
    <li>
      <a>Cloud Storage Environment Settings</a>
    </li>
    <li>
      <a>Authentication</a>
    </li>
    <li>
      <a>Payments</a>
    </li>
  </ul>
  <p class="menu-label">Transactions</p>
  <ul class="menu-list">
    <li>
      <a>Payments</a>
    </li>
    <li>
      <a>Transfers</a>
    </li>
    <li>
      <a>Balance</a>
    </li>
    <li>
      <a>Reports</a>
    </li>
  </ul>
</aside>
