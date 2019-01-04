<template>
  <div id="app">
    <banner><h1>Привет, TMC-UI!</h1></banner>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Banner from './components/banner.vue';

  @Component({
    components: {
      Banner,
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
