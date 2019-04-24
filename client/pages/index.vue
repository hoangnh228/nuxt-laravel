<template>
  <section class="row">
    <div class="col-md-12">
      <strong>User</strong>
      <pre>{{ $auth.user }}</pre>
      <button @click="logout">Logout</button>
    </div>
  </section>
</template>

<script>
  export default {
    middleware: 'authenticated',
    methods: {
      logout() {
        this.$auth.logout();
        this.$router.replace("/login");
      }
    }
  }
</script>
