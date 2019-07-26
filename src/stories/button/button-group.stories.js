import { storiesOf } from '@storybook/vue'

import { boolean } from '@storybook/addon-knobs';

const template = `<st-button-group>
  <st-button :disabled="disabled" type="primary" icon="cart">В заказ</st-button>
  <st-button :disabled="disabled" type="primary" icon="arrow-next">Бронировать</st-button>
</st-button-group>`;

storiesOf('Components/Button', module).add('Button Group', () => ({
  template,
  props: {
    disabled: {
      default: boolean('Disabled', false),
    }
  },
}));
