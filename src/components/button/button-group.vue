<template>
  <div class="tmc-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class TmcButton extends Vue {}
</script>
