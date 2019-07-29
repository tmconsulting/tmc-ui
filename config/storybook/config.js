/* eslint-disable import/no-extraneous-dependencies */
import {
  configure,
  addDecorator,
  addParameters,
} from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
// TODO: Перебраться с addon-notes на storybook-readme
// import { addReadme } from 'storybook-readme/vue';
import { spacetabTheme } from './spacetab-theme';

function loadStories() {
  const defaultStories = require.context('../../src/stories', true, /.stories.js$/);
  const exampleThemeStories = require.context(
    '../../src/themes/example/stories',
    true,
    /.stories.js$/,
  );
  requireStories(defaultStories);
  requireStories(exampleThemeStories);
}
function requireStories(stories) {
  stories.keys().forEach(filename => stories(filename));
}

addParameters({
  options: {
    name: 'spacetab.io',
    url: '#',
    theme: spacetabTheme,
    addonPanelInRight: true,
  },
});
// addDecorator(addReadme);
addDecorator(withKnobs);
configure(loadStories, module);

