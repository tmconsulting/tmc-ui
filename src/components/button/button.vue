<template>
  <button class="tmc-button"
          @click="handleClick"
          :disabled="disabled"
          :autofocus="autofocus"
          :type="nativeType"
          :class="buttonClass">
    <tmc-icon v-if="loading"
             name="loader"
             class="tmc-button__icon"
             @click="handleInnerClick"></tmc-icon>
    <tmc-icon v-if="icon && !loading"
             :name="icon"
             class="tmc-button__icon"
             @click="handleInnerClick"></tmc-icon>
    <span v-if="$slots.default"
          @click="handleInnerClick">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
  import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
  import TmcIcon from '../icon/icon.vue';

  @Component({
    components: {
      TmcIcon,
    },
  })
  export default class TmcButton extends Vue {
    @Inject({ default: '' }) elFormItem!: any;

    @Prop({ type: String, default: 'default' })
    type!: string;

    @Prop(String)
    size!: string;

    @Prop({ type: String, default: '' })
    icon!: string;

    @Prop({ type: String, default: 'button' })
    nativeType!: string;

    @Prop(Boolean)
    loading!: string;

    @Prop(Boolean)
    disabled!: string;

    @Prop(Boolean)
    plain!: string;

    @Prop(Boolean)
    autofocus!: string;

    @Prop(Boolean)
    round!: string;

    @Prop(Boolean)
    circle!: string;

    @Prop(Boolean)
    approve!: string;

    @Prop(Boolean)
    cancel!: string;

    @Prop(Boolean)
    remove!: string;

    @Prop(Boolean)
    search!: string;

    @Prop(Boolean)
    boldBorder!: string;

    handleClick($event: any) {
      this.$emit('click', $event);
    }

    handleInnerClick($event: any) {
      if (this.disabled) {
        $event.stopPropagation();
      }
    }

    get buttonClass() {
      return [
        this.type ? 'tmc-button--' + this.type : '',
        this.buttonSize ? 'tmc-button--' + this.buttonSize : '',
        {
          'tmc-button--disabled': this.disabled,
          'tmc-button--loading': this.loading,
          'tmc-button--plain': this.plain,
          'tmc-button--round': this.round,
          'tmc-button--circle': this.circle,
          'tmc-button--approve': this.approve,
          'tmc-button--cancel': this.cancel,
          'tmc-button--remove': this.remove,
          'tmc-button--search': this.search,
          'tmc-button--icon': this.icon,
          'tmc-button--bold-border': this.boldBorder,
        },
      ];
    }


    get _elFormItemSize(): string {
      return (this.elFormItem || {}).elFormItemSize;
    }

    get buttonSize(): string {
      return this.size || this._elFormItemSize || (this.$ELEMENT || { size: undefined }).size;
    }
  }
</script>

<style lang="scss" src="../../assets/scss/components/button/button.scss"></style>
