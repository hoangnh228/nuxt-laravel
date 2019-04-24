<template>
  <div>
    <site-header v-if="$auth.loggedIn" />
    <b-container fluid>
      <nuxt/>
    </b-container>
    <site-footer />
    <notifications />
  </div>
</template>

<script>
  import SiteHeader from '~/components/Header'
  import SiteFooter from '~/components/Footer'

  export default {
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>

<style lang="scss">
  html, * {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
</style>
