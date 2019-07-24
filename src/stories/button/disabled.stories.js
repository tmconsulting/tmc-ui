import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `<h4>Basic usage</h4>
<div>
  <st-button disabled>Default</st-button>
  <st-button type="primary" disabled>Primary</st-button>
</div>
  <div style="margin: 20px 0">
  <st-button type="secondary" disabled>Secondary</st-button>
  <st-button type="secondary" cancel disabled>Secondary Cancel</st-button>
  <st-button type="secondary" remove disabled>Secondary Delete</st-button>
</div>
<div>
  <st-button type="success" disabled>Success</st-button>
  <st-button type="info" disabled>Info</st-button>
  <st-button type="warning" disabled>Warning</st-button>
  <st-button type="danger" disabled>Danger</st-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <st-button plain disabled>Plain</st-button>
  <st-button type="primary" plain disabled>Primary</st-button>
</div>
<div>
  <st-button type="secondary" plain disabled>Secondary</st-button>
  <st-button type="secondary" cancel plain disabled>Secondary Cancel</st-button>
  <st-button type="secondary" remove plain disabled>Secondary Delete</st-button>
</div>
<div style="margin: 20px 0">
  <st-button type="success" plain disabled>Success</st-button>
  <st-button type="info" plain disabled>Info</st-button>
  <st-button type="warning" plain disabled>Warning</st-button>
  <st-button type="danger" plain disabled>Danger</st-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <st-button round disabled>Round</st-button>
  <st-button type="primary" round disabled>Primary</st-button>
</div>
<div>
  <st-button type="secondary" round disabled>Secondary</st-button>
  <st-button type="secondary" cancel round disabled>Secondary Cancel</st-button>
  <st-button type="secondary" remove round disabled>Secondary Delete</st-button>
</div>
<div style="margin: 20px 0">
  <st-button type="success" round disabled>Success</st-button>
  <st-button type="info" round disabled>Info</st-button>
  <st-button type="warning" round disabled>Warning</st-button>
  <st-button type="danger" round disabled>Danger</st-button>
</div>`;

storiesOf('Button', module).add('Disabled', () => ({
  template: `<div>${template}</div>`,
}));
