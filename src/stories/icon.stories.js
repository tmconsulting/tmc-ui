import { storiesOf } from '@storybook/vue';
import { text } from '@storybook/addon-knobs';
import icons from '../assets/icons/icons';

import iconNotes from '../documentation/icon.md';

let iconsLoopTemplate = '';
icons.forEach((icon) => {
  iconsLoopTemplate += `
    <li :style="liStyle">
      <span>${icon}</span>
      <st-icon name="${icon}" :style="iconStyle"></st-icon>
    </li>
  `;
});
const template = `
  <div>
    <ul :style="ulStyle">
      ${iconsLoopTemplate}
    </ul>
  </div>
`;

storiesOf('Components/Icon', module).add(
  'Default',
  () => ({
    template: template,
    props: {
      size: {
        default: text('Size', '30px'),
      },
      color: {
        default: text('Color', ''),
      },
    },
    data() {
      return {
        ulStyle: {
          display: 'flex',
          'flex-wrap': 'wrap',
          'list-style': 'none',
          padding: 0,
        },
        liStyle: {
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
          'flex-direction': 'column',
          padding: '20px 0',
          'box-sizing': 'border-box',
          width: '16.66%',
          'text-align': 'center',
          height: '120px',
          color: '#666',
          'font-size': '13px',
          transition: 'color .15s linear',
          'border': '1px solid #eee',
        },
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
    computed: {
      iconStyle() {
        return {
          color: this.color,
          width: this.size,
          height: this.size,
        }
      }
    }
  }),
  {
    notes: { markdown: iconNotes }
  },
);
