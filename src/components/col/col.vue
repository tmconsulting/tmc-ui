<template>
  <component :is="tag"
             :class="classList"
             :style="style">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface StylePaddings {
  paddingLeft?: string;
  paddingRight?: string;
}

interface SizeObject {
  [key: string]: number | object;
}

interface PropObject {
  [key: string]: number;
}

@Component
export default class TmcCol extends Vue {
  @Prop({ type: String, default: 'div' })
  tag!: string;

  @Prop({ type: Number, default: 24 })
  span!: number;

  @Prop(Number)
  offset!: number;

  @Prop(Number)
  pull!: number;

  @Prop(Number)
  push!: number;

  @Prop([Number, Object])
  xs!: number|object;

  @Prop([Number, Object])
  sm!: number|object;

  @Prop([Number, Object])
  md!: number|object;

  @Prop([Number, Object])
  lg!: number|object;

  @Prop([Number, Object])
  xl!: number|object;

  get gutter(): number {
    let $parent: any = this.$parent;
    while ($parent && $parent.$options._componentTag !== 'tmc-row') {
      $parent = $parent.$parent;
    }
    return $parent ? $parent.gutter : 0;
  }

  get style(): StylePaddings {
    const style: StylePaddings = {};
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }
    return style;
  }

  get sizeClassList(): string[] {
    const classList: string[] = [];
    const sizeObject: SizeObject = {
      xs: this.xs,
      sm: this.sm,
      md: this.md,
      lg: this.lg,
      xl: this.xl,
    };
    Object.keys(sizeObject).forEach((sizeName: string) => {
      const sizeValue: number | any = sizeObject[sizeName];
      if (typeof sizeValue === 'number') {
        classList.push(`tmc-col-${sizeName}-${sizeValue}`);
      } else if (typeof sizeValue === 'object') {
        Object.keys(sizeValue).forEach((sizePropName: string) => {
          const sizePropValue = sizeValue[sizePropName];
          classList.push(
            sizePropName !== 'span'
              ? `tmc-col-${sizeName}-${sizePropName}-${sizePropValue}`
              : `tmc-col-${sizeName}-${sizePropValue}`,
          );
        });
      }
    });
    return classList;
  }

  get propClassList(): string[] {
    const classList: string[] = [];
    const propObject: PropObject = {
      span: this.span,
      offset: this.offset,
      pull: this.pull,
      push: this.push,
    };
    Object.keys(propObject).forEach((propName: string) => {
      const propValue = propObject[propName];
      if (propValue || propValue === 0) {
        classList.push(
          propName !== 'span'
            ? `tmc-col-${propName}-${propValue}`
            : `tmc-col-${propValue}`,
        );
      }
    });
    return classList;
  }

  get classList(): string[] {
    return [
      'tmc-col',
      ...this.propClassList,
      ...this.sizeClassList,
    ].filter(Boolean);
  }
}
</script>

<style lang="scss" src="../../assets/scss/components/col/col.scss"></style>