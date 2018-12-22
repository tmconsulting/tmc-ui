import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `
<div>
  <tmc-button>Default</tmc-button>
  <tmc-button size="medium">Medium</tmc-button>
  <tmc-button size="small">Small</tmc-button>
  <tmc-button size="mini">Mini</tmc-button>
  <tmc-button size="large">Large</tmc-button>
  <tmc-button size="extra-large">Extra Large</tmc-button>
</div>
<div style="margin-top: 20px">
  <tmc-button round>Default</tmc-button>
  <tmc-button size="medium" round>Medium</tmc-button>
  <tmc-button size="small" round>Small</tmc-button>
  <tmc-button size="mini" round>Mini</tmc-button>
  <tmc-button size="extra-large" round>Extra Large</tmc-button>
</div>
`;

storiesOf('Button', module).add('Sizes', () => ({
  template: `<div>${template}</div>`,
}));
