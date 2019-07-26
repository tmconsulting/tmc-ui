import { storiesOf } from '@storybook/vue'

import { boolean } from '@storybook/addon-knobs';

const template = `
<div>
  <st-button :disabled="disabled">Default</st-button>
  <st-button :disabled="disabled" size="medium">Medium</st-button>
  <st-button :disabled="disabled" size="small">Small</st-button>
  <st-button :disabled="disabled" size="mini">Mini</st-button>
  <st-button :disabled="disabled" size="large">Large</st-button>
  <st-button :disabled="disabled" size="extra-large">Extra Large</st-button>
</div>
<div style="margin-top: 20px">
  <st-button :disabled="disabled" round>Default</st-button>
  <st-button :disabled="disabled" size="medium" round>Medium</st-button>
  <st-button :disabled="disabled" size="small" round>Small</st-button>
  <st-button :disabled="disabled" size="mini" round>Mini</st-button>
  <st-button :disabled="disabled" size="extra-large" round>Extra Large</st-button>
</div>
`;

storiesOf('Components/Button', module).add('Sizes', () => ({
  template: `<div>${template}</div>`,
  props: {
    disabled: {
      default: boolean('Disabled', false),
    }
  },
}));
