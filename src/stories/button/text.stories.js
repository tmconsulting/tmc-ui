import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `
<div>
  <div>
    <tmc-button type="text">Text Button</tmc-button>
    <tmc-button type="text" disabled>Text Button</tmc-button>
  </div>
  <div style="margin: 20px 0">
    <tmc-button type="text" icon="bucket">Отменить бронирование</tmc-button>
    <tmc-button type="text" icon="repeat">Повторить заказ</tmc-button>
    <tmc-button type="text" icon="copy">Скопировать</tmc-button>
    <tmc-button type="text" icon="star">Добавить в избранное</tmc-button>
    <tmc-button type="text" icon="upload">Загрузите список в формате .xls (.xlsx)</tmc-button>
    <tmc-button type="text" icon="advanced-search" search>Расширеный поиск</tmc-button>
  </div>
</div>
`;

storiesOf('Button', module).add('Text', () => ({
  template: `<div>${template}</div>`,
}));
