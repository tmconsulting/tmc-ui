import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

storiesOf('Button', module).add('Loading', () => ({
  template: '<tmc-button type="primary" :loading="true">Loading</tmc-button>',
}));
