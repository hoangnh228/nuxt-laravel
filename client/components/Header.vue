<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">EbayManager</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#" class="active">Dashboard</b-nav-item>
            <b-nav-item href="#">Orders</b-nav-item>
            <b-nav-item href="#">Accounts</b-nav-item>
            <b-nav-item href="#">Users</b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <strong><em>{{ $auth.user.name }}</em></strong>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="logout" href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
  export default {
    methods: {
      logout() {
        this.$auth.logout();
        this.$router.replace("/login");
      }
    }
  }
</script>
