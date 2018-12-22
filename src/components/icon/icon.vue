<template>
  <i :class="iconClass"
     @click="handleClick">
    <svg>
      <use :xlink:href="`#${name}`" />
    </svg>
  </i>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import '../../utils/icons';

  @Component
  export default class Icon extends Vue {
    @Prop({ type: String, required: true })
    name!: string;

    get iconClass() {
      return [
        'tmc-icon',
        this.name ? 'tmc-icon--' + this.name : '',
      ];
    }

    handleClick(event: any) {
      this.$emit('click', event);
    }
  }
</script>

<style lang="scss" src="../../assets/scss/components/icon/icon.scss"></style>
