import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'InitialWbpartSpWebPartStrings';
import InitialWbpartSp from './components/InitialWbpartSp';
import { IInitialWbpartSpProps } from './components/IInitialWbpartSpProps';

export interface IInitialWbpartSpWebPartProps {
  listName: string;
}

export default class InitialWbpartSpWebPart extends BaseClientSideWebPart <IInitialWbpartSpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IInitialWbpartSpProps> = React.createElement(
      InitialWbpartSp,
      {
        listName: this.properties.listName,  
        spHttpClient: this.context.spHttpClient,  
        siteUrl: this.context.pageContext.web.absoluteUrl
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
                PropertyPaneTextField('listName', {
                  label: strings.ListNameFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
