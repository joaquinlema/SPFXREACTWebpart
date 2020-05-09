import * as React from 'react';
import styles from './InitialWbpartSp.module.scss';
import { IInitialWbpartSpProps } from './IInitialWbpartSpProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { ISpfxReactCrudState } from './ISpfxReactCrudState'; 
import { IListItem } from './IListItem';  
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';

export default class InitialWbpartSp extends React.Component<IInitialWbpartSpProps,ISpfxReactCrudState> {
 
  constructor(props: IInitialWbpartSpProps, state: ISpfxReactCrudState) {  
    super(props);  
  
    this.state = {  
      status: 'Ready',  
      items: []  
    };  
  }  
  
  public render(): React.ReactElement<IInitialWbpartSpProps> {

    return (
    
      <div className={ styles.initialWbpartSp }>  
        <div className={ styles.container }>  
          <div className={ styles.row }>  
            <div className={ styles.column }>  
              <span className={ styles.title }>Welcome to SharePoint!</span>  
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>  
              <p className={ styles.description }>{escape(this.props.listName)}</p>  
              <a href="https://aka.ms/spfx" className="${ styles.button }">  
                <span className="${ styles.label }">Learn more</span>  
              </a>  
            </div>  
          </div>  
        </div>  
      </div>  
    );
  }
}
