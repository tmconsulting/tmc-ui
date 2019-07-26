import { storiesOf } from '@storybook/vue'

import { boolean } from '@storybook/addon-knobs';

const template = `<h4>Basic usage</h4>
<div>
  <st-button :disabled="disabled">Default</st-button>
  <st-button :disabled="disabled" type="primary">Primary</st-button>
</div>
  <div style="margin: 20px 0">
  <st-button :disabled="disabled" type="secondary">Secondary</st-button>
  <st-button :disabled="disabled" type="secondary" cancel>Secondary Cancel</st-button>
  <st-button :disabled="disabled" type="secondary" remove>Secondary Delete</st-button>
</div>
<div>
  <st-button :disabled="disabled" type="success">Success</st-button>
  <st-button :disabled="disabled" type="info">Info</st-button>
  <st-button :disabled="disabled" type="warning">Warning</st-button>
  <st-button :disabled="disabled" type="danger">Danger</st-button>
</div>
<h4>Plain usage</h4>
<div style="margin: 20px 0">
  <st-button :disabled="disabled" plain>Plain</st-button>
  <st-button :disabled="disabled" type="primary" plain>Primary</st-button>
</div>
<div>
  <st-button :disabled="disabled" type="secondary" plain>Secondary</st-button>
  <st-button :disabled="disabled" type="secondary" cancel plain>Secondary Cancel</st-button>
  <st-button :disabled="disabled" type="secondary" remove plain>Secondary Delete</st-button>
</div>
<div style="margin: 20px 0">
  <st-button :disabled="disabled" type="success" plain>Success</st-button>
  <st-button :disabled="disabled" type="info" plain>Info</st-button>
  <st-button :disabled="disabled" type="warning" plain>Warning</st-button>
  <st-button :disabled="disabled" type="danger" plain>Danger</st-button>
</div>
<h4>Round usage</h4>
<div style="margin: 20px 0">
  <st-button :disabled="disabled" round>Round</st-button>
  <st-button :disabled="disabled" type="primary" round>Primary</st-button>
</div>
<div>
  <st-button :disabled="disabled" type="secondary" round>Secondary</st-button>
  <st-button :disabled="disabled" type="secondary" cancel round>Secondary Cancel</st-button>
  <st-button :disabled="disabled" type="secondary" remove round>Secondary Delete</st-button>
</div>
<div style="margin: 20px 0">
  <st-button :disabled="disabled" type="success" round>Success</st-button>
  <st-button :disabled="disabled" type="info" round>Info</st-button>
  <st-button :disabled="disabled" type="warning" round>Warning</st-button>
  <st-button :disabled="disabled" type="danger" round>Danger</st-button>
</div>`;

storiesOf('Components/Button', module).add('Basic', () => ({
  template: `<div>${template}</div>`,
  props: {
    disabled: {
      default: boolean('Disabled', false),
    }
  },
}));