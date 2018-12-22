import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue'
import icons from '../assets/icons/icons';

const iconStoriesOf = storiesOf('Icon', module);
let template = `
  <div>
    <div>
      <div>
        Icon Color: 
        <input type="text" v-model="iconColor">
      </div>
      <div>
        Icon Size: 
        <input type="text" v-model="iconSize">
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap;">
  `;

icons.forEach((icon) => {
  template += `
    <div :style="itemStyle">
      <div style="font-weight: bold; margin-bottom: 5px;">${icon}</div>
      <div><tmc-icon name="${icon}" :style="iconStyle"></tmc-icon></div>
    </div>
  `;
});

template += `
    </div>
  </div>
`;

iconStoriesOf.add('Icons', () => ({
  template: template,
  data() {
    return {
      iconColor: 'green',
      iconSize: '14px',
      itemStyle: {
        width: '200px',
        margin: '10px',
        textAlign: 'center',
        background: '#eaeaea',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }
  },
  methods: { action: action('clicked') },
  computed: {
    iconStyle() {
      return {
        color: this.iconColor,
        width: this.iconSize,
        height: this.iconSize,
      }
    }
  }
}));
