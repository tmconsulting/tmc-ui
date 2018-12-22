import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `<tmc-button-group>
  <tmc-button type="primary" icon="cart">В заказ</tmc-button>
  <tmc-button type="primary" icon="arrow-next">Бронировать</tmc-button>
</tmc-button-group>`;

storiesOf('Button', module).add('Button Group', () => ({
  template,
}));
