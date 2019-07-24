import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

const template = `
<div>
  <st-button>Default</st-button>
  <st-button size="medium">Medium</st-button>
  <st-button size="small">Small</st-button>
  <st-button size="mini">Mini</st-button>
  <st-button size="large">Large</st-button>
  <st-button size="extra-large">Extra Large</st-button>
</div>
<div style="margin-top: 20px">
  <st-button round>Default</st-button>
  <st-button size="medium" round>Medium</st-button>
  <st-button size="small" round>Small</st-button>
  <st-button size="mini" round>Mini</st-button>
  <st-button size="extra-large" round>Extra Large</st-button>
</div>
`;

storiesOf('Button', module).add('Sizes', () => ({
  template: `<div>${template}</div>`,
}));
