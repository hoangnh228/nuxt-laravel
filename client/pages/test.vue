<template>
  <b-row align-h="center" class="login-row">
    <b-col lg="3" sm="7">
      <h1 class="text-center">TCI Blog</h1>
      <b-card bg-variant="dark" text-variant="white" border-variant="secondary" header-bg-variant="dark">
        <b-form @submit.prevent="pushNotification" class="text-center">
          <b-button type="submit" variant="primary">Test Notification</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    auth: false,
    middleware: 'guest',
    methods: {
      pushNotification() {
        this.$notify({
            type: 'warning',
            title: 'I am a danger notification!',
            text: 'Has some problem, please try again later'
          })
      }
    }
  }
</script>

<style lang="scss">
  .login-row {
    min-height: 80vh;
    margin-top: 150px;
    .brand {
      margin-top: 20px 0;
    }
  }
</style>
