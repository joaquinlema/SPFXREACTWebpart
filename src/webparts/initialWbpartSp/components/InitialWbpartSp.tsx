import * as React from 'react';
//import styles from './InitialWbpartSp.module.scss';
import { IInitialWbpartSpProps } from './IInitialWbpartSpProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { ISpfxReactCrudState } from './ISpfxReactCrudState'; 
import { IListItem } from './IListItem';  
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export default class InitialWbpartSp extends React.Component<IInitialWbpartSpProps, {}> {
  
  constructor(props: IInitialWbpartSpProps, state: ISpfxReactCrudState) {  
    super(props);  
  
    this.state = {  
      status: 'Ready',  
      items: []
    }; 
  }
  
  public render(): React.ReactElement<IInitialWbpartSpProps> {
    return (
      <div >
        <div >
          <div >
            <div >
              <span >Welcome to SharePoint!</span>
              <p >Customize SharePoint experiences using Web Parts.</p>
              <p >{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" >
                <span >Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
