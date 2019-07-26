import { storiesOf } from '@storybook/vue'

import { boolean } from '@storybook/addon-knobs';

storiesOf('Components/Button', module).add('Loading', () => ({
  template: '<st-button :disabled="disabled" type="primary" :loading="true">Loading</st-button>',
  props: {
    disabled: {
      default: boolean('Disabled', false),
    }
  },
}));
