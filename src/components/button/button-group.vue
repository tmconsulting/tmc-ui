<template>
  <div class="st-button-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class StButton extends Vue {}
</script>
