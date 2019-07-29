import { storiesOf } from '@storybook/vue';
import { template } from '../../templates/customization/creating-theme.template';

const customizationStoriesOf = storiesOf('Customization', module);

customizationStoriesOf.add('Creating a theme', () => ({ template }));
