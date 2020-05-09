import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PeoplePickerWpWebPartStrings';
import PeoplePickerWp from './components/PeoplePickerWp';
import { IPeoplePickerWpProps } from './components/IPeoplePickerWpProps';

export interface IPeoplePickerWpWebPartProps {
  description: string;
}

export default class PeoplePickerWpWebPart extends BaseClientSideWebPart <IPeoplePickerWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPeoplePickerWpProps> = React.createElement(
      PeoplePickerWp,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
