export const template = `
  <div class="storybook-customization">
    <h2>Creating a theme</h2>
    <h3>Prepare theme files</h3>
    <div>
      1. Create a theme's style file.
      <pre>src/assets/scss/themes/%theme_name%.scss
        <code class="language-scss">
          // Define new variables for your theme
          $st-color-turquoise: #40E0D0 !default;
          $st-color-orangered: #FF4500 !default;
          
          // Or, redefine default theme's variables
          $st-color-primary: $st-color-orangered !default;
          $st-color-secondary: $st-color-turquoise !default;
          $st-border-width: 2px !default;
          
          @import "default";
        </code>
      </pre>
      
      2. Create folders for your theme:
      <pre><code>
        src/themes/%theme_name%/components // your theme's components
        src/themes/%theme_name%/documentation // your theme's documentation for components
        src/themes/%theme_name%/stories  // your theme's stories pages
      </code></pre>
    </div>
    
    <h3>Create a custom component</h3>
    <div>
      1. Create component's index.vue file 
      <pre>src/themes/%theme_name%/components/%component_name%/index.vue</pre>
      2. You can create your own component or extend one of default's. 
      In this example we will extend the default's Icon component.
      <pre><code class="language-html">
        // For example check file:
        // src/themes/example/components/icon/index.vue
      </code></pre>
    </div>
    
    <h3>Create component's story page</h3>
    <div>
      1. Import your component in <i>index.stories.js</i>.
      <pre>src/themes/%theme_name%/stories/index.stories.js
        <code class="language-js">
          import Vue from 'vue';
          import StCustomComponent from '../components/%component_name%/index.vue';
          import documentationFile from '../../../../../stories/documentation/%component_name%.md';
          
          Vue.component('st-custom-component', StCustomComponent);
        </code>
      </pre>
      
      2. Create a story and a template files.
      <pre>src/themes/%theme_name%/stories/pages/%component_name%/default.stories.js
        <code class="language-js">
          import { storiesOf } from '@storybook/vue';
          import { template } from '../../templates/%component_name%/default.template';
          
          storiesOf('Themes/%ThemeName%/%ComponentName%', module).add(
            'Default',
            () => ({
              template: template,
            }),
            {
              notes: { 
                markdown: documentationFile,
              },
            },
        </code>
      </pre>

      <pre>src/themes/%theme_name%/stories/templates/%component_name%/default.template.js
        <code class="language-js">
           // template example
        </code>
      </pre>
    </div>
  </div>
`;