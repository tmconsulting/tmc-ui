<template>
  <div class="banner">
    <slot />
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Banner extends Vue {
  }
</script>

<style lang="scss">
  .banner {
    width: 100%;
    font-family: 'sans-serif';
    padding: 20px;
    border: solid 2px;
    box-sizing: border-box;
    text-align: center;
  }
</style>