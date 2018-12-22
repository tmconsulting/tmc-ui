import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `
<div>
  <h4>Basic usage</h4>
  <div>
    <tmc-button type="secondary" icon="check" circle approve></tmc-button>
    <tmc-button type="secondary" icon="cross" circle cancel></tmc-button>
  </div>
  <div>
    <tmc-button type="secondary" icon="check" circle approve bold-border></tmc-button>
    <tmc-button type="secondary" icon="cross" circle cancel bold-border></tmc-button>
  </div>
  <div style="margin: 20px 0">
    <tmc-button type="default" icon="cross" size="mini">Закрыть карту</tmc-button>
    <tmc-button type="secondary" icon="location" size="mini">Поиск на карте</tmc-button>
  </div>
  <div>
    <tmc-button type="secondary" icon="plus">Создать заказ</tmc-button>
    <tmc-button type="info" icon="circle-plus" size="medium">Добавить перелет</tmc-button>
  </div>
  <h4>Disable usage</h4>
  <div>
    <tmc-button type="secondary" icon="check" circle approve disabled></tmc-button>
    <tmc-button type="secondary" icon="cross" circle cancel disabled></tmc-button>
  </div>
  <div style="margin: 20px 0">
    <tmc-button type="default" icon="cross" size="mini" disabled>Закрыть карту</tmc-button>
    <tmc-button type="secondary" icon="location" size="mini" disabled>Поиск на карте</tmc-button>
  </div>
  <div>
    <tmc-button type="secondary" icon="plus" disabled>Создать заказ</tmc-button>
    <tmc-button type="info" icon="circle-plus" size="medium" disabled>Добавить перелет</tmc-button>
  </div>
</div>
`;

storiesOf('Button', module).add('Icon', () => ({
  template: `<div>${template}</div>`,
}));
