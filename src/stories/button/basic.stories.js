import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `<h4>Basic usage</h4>
<div>
  <tmc-button>Default</tmc-button>
  <tmc-button type="primary">Primary</tmc-button>
</div>
  <div style="margin: 20px 0">
  <tmc-button type="secondary">Secondary</tmc-button>
  <tmc-button type="secondary" cancel>Secondary Cancel</tmc-button>
  <tmc-button type="secondary" remove>Secondary Delete</tmc-button>
</div>
<div>
  <tmc-button type="success">Success</tmc-button>
  <tmc-button type="info">Info</tmc-button>
  <tmc-button type="warning">Warning</tmc-button>
  <tmc-button type="danger">Danger</tmc-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <tmc-button plain>Plain</tmc-button>
  <tmc-button type="primary" plain>Primary</tmc-button>
</div>
<div>
  <tmc-button type="secondary" plain>Secondary</tmc-button>
  <tmc-button type="secondary" cancel plain>Secondary Cancel</tmc-button>
  <tmc-button type="secondary" remove plain>Secondary Delete</tmc-button>
</div>
<div style="margin: 20px 0">
  <tmc-button type="success" plain>Success</tmc-button>
  <tmc-button type="info" plain>Info</tmc-button>
  <tmc-button type="warning" plain>Warning</tmc-button>
  <tmc-button type="danger" plain>Danger</tmc-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <tmc-button round>Round</tmc-button>
  <tmc-button type="primary" round>Primary</tmc-button>
</div>
<div>
  <tmc-button type="secondary" round>Secondary</tmc-button>
  <tmc-button type="secondary" cancel round>Secondary Cancel</tmc-button>
  <tmc-button type="secondary" remove round>Secondary Delete</tmc-button>
</div>
<div style="margin: 20px 0">
  <tmc-button type="success" round>Success</tmc-button>
  <tmc-button type="info" round>Info</tmc-button>
  <tmc-button type="warning" round>Warning</tmc-button>
  <tmc-button type="danger" round>Danger</tmc-button>
</div>`;

storiesOf('Button', module).add('Basic', () => ({
  template: `<div>${template}</div>`,
}));
