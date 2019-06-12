import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/vue';

import {
  rowAttributes,
  colAttributes,
} from '../documentation/row-col';
import { ComponentAttributesTable } from '../utils/component-attributes-table';
const RowAttributesTable = new ComponentAttributesTable(rowAttributes);
const ColAttributesTable = new ComponentAttributesTable(colAttributes);

const rowColStoriesOf = storiesOf('Row, Col', module);

const template = `
  <h1>Example:</h1>
  <tmc-row :gutter="gutter">
    <tmc-col v-for="col in cols" :span="gutter / cols.length">{{ col }}</tmc-col>
  </tmc-row>
   
  <h1>Documentation:</h1>
  <h2>Row attributes</h2>
  ${RowAttributesTable.tableTemplate}
  <h2>Col attributes</h2>
  ${ColAttributesTable.tableTemplate}
`;

const exampleData = {
  gutter: 24,
  cols: [
    1.0005,
    1.2000,
    1.0300,
    1.1000,
    2.0005,
    2.2000,
    2.0300,
    2.1000,
  ]
};

rowColStoriesOf.add(
  'Default',
  () => ({
    template: `<div>${template}</div>`,
    data: () => (exampleData)
  }),
);