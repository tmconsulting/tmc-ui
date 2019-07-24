import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `<st-button-group>
  <st-button type="primary" icon="cart">В заказ</st-button>
  <st-button type="primary" icon="arrow-next">Бронировать</st-button>
</st-button-group>`;

storiesOf('Button', module).add('Button Group', () => ({
  template,
}));
