import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `<h4>Basic usage</h4>
<div>
  <st-button>Default</st-button>
  <st-button type="primary">Primary</st-button>
</div>
  <div style="margin: 20px 0">
  <st-button type="secondary">Secondary</st-button>
  <st-button type="secondary" cancel>Secondary Cancel</st-button>
  <st-button type="secondary" remove>Secondary Delete</st-button>
</div>
<div>
  <st-button type="success">Success</st-button>
  <st-button type="info">Info</st-button>
  <st-button type="warning">Warning</st-button>
  <st-button type="danger">Danger</st-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <st-button plain>Plain</st-button>
  <st-button type="primary" plain>Primary</st-button>
</div>
<div>
  <st-button type="secondary" plain>Secondary</st-button>
  <st-button type="secondary" cancel plain>Secondary Cancel</st-button>
  <st-button type="secondary" remove plain>Secondary Delete</st-button>
</div>
<div style="margin: 20px 0">
  <st-button type="success" plain>Success</st-button>
  <st-button type="info" plain>Info</st-button>
  <st-button type="warning" plain>Warning</st-button>
  <st-button type="danger" plain>Danger</st-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <st-button round>Round</st-button>
  <st-button type="primary" round>Primary</st-button>
</div>
<div>
  <st-button type="secondary" round>Secondary</st-button>
  <st-button type="secondary" cancel round>Secondary Cancel</st-button>
  <st-button type="secondary" remove round>Secondary Delete</st-button>
</div>
<div style="margin: 20px 0">
  <st-button type="success" round>Success</st-button>
  <st-button type="info" round>Info</st-button>
  <st-button type="warning" round>Warning</st-button>
  <st-button type="danger" round>Danger</st-button>
</div>`;

storiesOf('Button', module).add('Basic', () => ({
  template: `<div>${template}</div>`,
}));
