import { storiesOf } from '@storybook/vue';

const customizationStoriesOf = storiesOf('Customization', module);
const template = `<div>
  <h2>Customization</h2>
  <h3>Via vue.config.js (vue-cli)</h3>
  <div>
    1. Install sass-loader.
    <pre>
      npm install sass sass-loader
    </pre>

    2. Create a .scss file, import TmcUi theme file, modify variables you want to. 
    <br><i>If you already have a style file with your local variables you can use it.</i>
    <pre>
      // src/assets/scss/var.scss
      @import '~tmc-ui/src/assets/scss/themes/default';
      
      // The variables you want to modify
      $st-color-success: green;
      // Also you can modify components' variables
      $st-button-danger-color: red;
    </pre>
    
    3. Setup <b>vue.config.file</b>
    <pre>
      module.exports = {
        css: {
          loaderOptions: {
            sass: {
              data: \`@import "~@/assets/scss/var.scss"\`,
            },
          },
        },
      }    
    </pre>
  </div>
</div>`;

customizationStoriesOf.add('How to customize components?', () => ({
  template: template,
}));
