<template>
  <component :is="tag"
             :class="classList"
             :style="style">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface StyleMargins {
  marginLeft?: string;
  marginRight?: string;
}

@Component
export default class TmcRow extends Vue {
  @Prop({ type: String, default: 'div' })
  tag!: string;

  @Prop(Number)
  gutter!: number;

  @Prop(String)
  type!: string;

  @Prop({ type: String, default: 'start' })
  justify!: string;

  @Prop({ type: String, default: 'top' })
  align!: string;

  get style() {
    const style: StyleMargins = {};
    if (this.gutter) {
      style.marginLeft = `-${this.gutter / 2}px`;
      style.marginRight = style.marginLeft;
    }
    return style;
  }

  get classList() {
    return [
      'tmc-row',
      this.justify !== 'start' ? `tmc-row--justify-${this.justify}` : '',
      this.align !== 'top' ? `tmc-row--align-${this.align}` : '',
      this.type === 'flex' ? 'tmc-row--flex' : '',
    ].filter(Boolean);
  }
}
</script>

<style lang="scss" src="../../assets/scss/components/row/row.scss"></style>