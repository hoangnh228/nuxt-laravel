<template>
  <div id="cover-spin" class="loading" v-if="show"></div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    start() {
      this.show = true
    },
    set() {
      this.show = true
    },
    finish() {
      setTimeout(() => {
        this.show = false
      }, 500)
    },
    fail() {
      this.finish()
    }
  }
}
</script>

<style lang="scss" scoped>
  #cover-spin {
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.7);
    z-index: 9999;
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: 48%;
      top: 40%;
      width: 40px;
      height: 40px;
      border-style: solid;
      border-color: black;
      border-top-color: transparent;
      border-width: 4px;
      border-radius: 50%;
      -webkit-animation: spin .8s linear infinite;
      animation: spin .8s linear infinite;
    }
  }

  @-webkit-keyframes spin {
    from { -webkit-transform:rotate(0deg); }
    to { -webkit-transform:rotate(360deg); }
  }

  @keyframes spin {
    from { transform:rotate(0deg); }
    to { transform:rotate(360deg); }
  }
</style>
