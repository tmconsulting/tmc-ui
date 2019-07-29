import { storiesOf } from '@storybook/vue';
import { template } from '../../templates/icon/default.template';
import { color, select, text } from '@storybook/addon-knobs';

import icons from '../../../../../assets/icons/icons';
import iconNotes from '../../../../../stories/documentation/icon.md';

storiesOf('Themes/Example/Icon', module).add(
  'Default',
  () => ({
    template: `<div>${template}</div>`,
    props: {
      iconName: {
        default: select('Icon Name', icons, "arrow-both"),
      },
      size: {
        default: text('Size', ''),
      },
      color: {
        default: color('Color', ''),
      },
    },
    computed: {
      iconStyle() {
        return {
          color: this.color,
          width: this.size,
          height: this.size,
        }
      }
    },
  }),
  {
    notes: { markdown: iconNotes }
  },
);