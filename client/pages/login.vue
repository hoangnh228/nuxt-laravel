<template>
  <b-row align-h="center" class="login-row">
    <b-col lg="3" sm="7">
      <h1 class="text-center">TCI Blog</h1>
      <b-card bg-variant="dark" text-variant="white" border-variant="secondary" header-bg-variant="dark">
        <h4 slot="header" class="text-center">Login</h4>
        <b-form @submit.prevent="login">
          <b-form-group label="Email:" label-for="email">
            <b-form-input id="email" type="email" v-model="user.username" required placeholder="Enter email" />
          </b-form-group>
          <b-form-group label="Password:" label-for="password">
            <b-form-input id="password" type="password" v-model="user.password" required placeholder="Enter password" />
          </b-form-group>
          <hr>
          <b-button type="submit" variant="primary">Login</b-button>
          &nbsp;
          <a href="#">Forgot your password?</a>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    auth: false,
    middleware: 'guest',
    data() {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$notify({
            type: 'info',
            title: 'I am a notification!',
            text: 'Hello TwentyCI'
          })
      }
      // async login() {
      //   try {
      //     await this.$auth.loginWith("password_grant_custom", {
      //       data: this.user
      //     })
      //     this.$router.replace("/")
      //   } catch (error) {
      //     this.$notify({
      //       type: 'error',
      //       title: 'Login failed!',
      //       text: error.message
      //     })
      //   }
      // }
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
