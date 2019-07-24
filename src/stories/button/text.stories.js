import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `
<div>
  <div>
    <st-button type="text">Text Button</st-button>
    <st-button type="text" disabled>Text Button</st-button>
  </div>
  <div style="margin: 20px 0">
    <st-button type="text" icon="bucket">Отменить бронирование</st-button>
    <st-button type="text" icon="repeat">Повторить заказ</st-button>
    <st-button type="text" icon="copy">Скопировать</st-button>
    <st-button type="text" icon="star">Добавить в избранное</st-button>
    <st-button type="text" icon="upload">Загрузите список в формате .xls (.xlsx)</st-button>
    <st-button type="text" icon="advanced-search" search>Расширеный поиск</st-button>
  </div>
</div>
`;

storiesOf('Button', module).add('Text', () => ({
  template: `<div>${template}</div>`,
}));
