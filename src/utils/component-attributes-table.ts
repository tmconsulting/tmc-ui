export interface AttributeParams {
  name: string;
  description: string;
  type: string;
  required: boolean;
  defaultValue: string;
  possibleValues: string;
}

export class ComponentAttributesTable {
  attributes: AttributeParams[];

  constructor(attributes: AttributeParams[]) {
    this.attributes = attributes;
  }

  public get tableTemplate() {
    let template = `
      <table border="1" class="storybook-component-documentation__table">
        <thead>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Required</th>
          <th>Default value</th>
          <th>Possible values</th>
        </thead>
        <tbody>
    `;
    this.attributes.forEach((attribute: AttributeParams) => {
      template += `
          <tr>
            <td>${attribute.name}</td>
            <td>${attribute.description}</td>
            <td>${attribute.type}</td>
            <td>${attribute.required}</td>
            <td>${attribute.defaultValue}</td>
            <td>${attribute.possibleValues}</td>
          </tr>
      `;
    });
    template += `
        </tbody>
      </table>
    `;
    return template;
  }
}
