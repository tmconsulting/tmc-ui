import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'

storiesOf('Button', module).add('Loading', () => ({
  template: '<st-button type="primary" :loading="true">Loading</st-button>',
}));
