import { storiesOf } from '@storybook/vue';
import { template } from '../../templates/customization/how-to.template';

const customizationStoriesOf = storiesOf('Customization', module);

customizationStoriesOf.add('How to?', () => ({ template }));
