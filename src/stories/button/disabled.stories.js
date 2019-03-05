import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `<h4>Basic usage</h4>
<div>
  <tmc-button disabled>Default</tmc-button>
  <tmc-button type="primary" disabled>Primary</tmc-button>
</div>
  <div style="margin: 20px 0">
  <tmc-button type="secondary" disabled>Secondary</tmc-button>
  <tmc-button type="secondary" cancel disabled>Secondary Cancel</tmc-button>
  <tmc-button type="secondary" remove disabled>Secondary Delete</tmc-button>
</div>
<div>
  <tmc-button type="success" disabled>Success</tmc-button>
  <tmc-button type="info" disabled>Info</tmc-button>
  <tmc-button type="warning" disabled>Warning</tmc-button>
  <tmc-button type="danger" disabled>Danger</tmc-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <tmc-button plain disabled>Plain</tmc-button>
  <tmc-button type="primary" plain disabled>Primary</tmc-button>
</div>
<div>
  <tmc-button type="secondary" plain disabled>Secondary</tmc-button>
  <tmc-button type="secondary" cancel plain disabled>Secondary Cancel</tmc-button>
  <tmc-button type="secondary" remove plain disabled>Secondary Delete</tmc-button>
</div>
<div style="margin: 20px 0">
  <tmc-button type="success" plain disabled>Success</tmc-button>
  <tmc-button type="info" plain disabled>Info</tmc-button>
  <tmc-button type="warning" plain disabled>Warning</tmc-button>
  <tmc-button type="danger" plain disabled>Danger</tmc-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <tmc-button round disabled>Round</tmc-button>
  <tmc-button type="primary" round disabled>Primary</tmc-button>
</div>
<div>
  <tmc-button type="secondary" round disabled>Secondary</tmc-button>
  <tmc-button type="secondary" cancel round disabled>Secondary Cancel</tmc-button>
  <tmc-button type="secondary" remove round disabled>Secondary Delete</tmc-button>
</div>
<div style="margin: 20px 0">
  <tmc-button type="success" round disabled>Success</tmc-button>
  <tmc-button type="info" round disabled>Info</tmc-button>
  <tmc-button type="warning" round disabled>Warning</tmc-button>
  <tmc-button type="danger" round disabled>Danger</tmc-button>
</div>`;

storiesOf('Button', module).add('Disabled', () => ({
  template: `<div>${template}</div>`,
}));
