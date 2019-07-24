import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `
<div>
  <h4>Basic usage</h4>
  <div>
    <st-button type="secondary" icon="check" circle approve></st-button>
    <st-button type="secondary" icon="cross" circle cancel></st-button>
  </div>
  <div>
    <st-button type="secondary" icon="check" circle approve bold-border></st-button>
    <st-button type="secondary" icon="cross" circle cancel bold-border></st-button>
  </div>
  <div style="margin: 20px 0">
    <st-button type="default" icon="cross" size="mini">Закрыть карту</st-button>
    <st-button type="secondary" icon="location" size="mini">Поиск на карте</st-button>
  </div>
  <div>
    <st-button type="secondary" icon="plus">Создать заказ</st-button>
    <st-button type="info" icon="circle-plus" size="medium">Добавить перелет</st-button>
  </div>
  <h4>Disable usage</h4>
  <div>
    <st-button type="secondary" icon="check" circle approve disabled></st-button>
    <st-button type="secondary" icon="cross" circle cancel disabled></st-button>
  </div>
  <div style="margin: 20px 0">
    <st-button type="default" icon="cross" size="mini" disabled>Закрыть карту</st-button>
    <st-button type="secondary" icon="location" size="mini" disabled>Поиск на карте</st-button>
  </div>
  <div>
    <st-button type="secondary" icon="plus" disabled>Создать заказ</st-button>
    <st-button type="info" icon="circle-plus" size="medium" disabled>Добавить перелет</st-button>
  </div>
</div>
`;

storiesOf('Button', module).add('Icon', () => ({
  template: `<div>${template}</div>`,
}));
