/* eslint-disable import/no-extraneous-dependencies */
import {
  configure,
  addDecorator,
  addParameters,
} from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import { spacetabTheme } from './spacetab-theme';

function loadStories() {
  const req = require.context('../../src/stories', true, /.stories.js$/);
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: 'spacetab.io',
    url: '#',
    theme: spacetabTheme,
    addonPanelInRight: true,
  },
});
addDecorator(withKnobs);
configure(loadStories, module);

