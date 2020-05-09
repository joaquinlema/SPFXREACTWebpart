import * as React from 'react';
import styles from './PeoplePickerWp.module.scss';
import { IPeoplePickerWpProps } from './IPeoplePickerWpProps';
import { IPnPPeoplePickerState } from './PnPPeoplePickerState';

import { escape } from '@microsoft/sp-lodash-subset';
// @pnp/sp imports      
import { sp } from '@pnp/sp';  

import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";  

export default class PeoplePickerWp extends React.Component<IPeoplePickerWpProps, {}> {
  constructor(props: IPeoplePickerWpProps, state: IPnPPeoplePickerState) {    
    super(props);    
    
    this.state = {    
      addUsers: []    
    };    
  }    

  public render(): React.ReactElement<IPeoplePickerWpProps> {
    return (
      <div className={ styles.peoplePickerWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              
              <PeoplePicker    
                context={this.props.context}    
                titleText="People Picker"    
                personSelectionLimit={3}    
                groupName={""} // Leave this blank in case you want to filter from all users    
                showtooltip={true}    
                isRequired={true}    
                disabled={false}    
                ensureUser={true}    
                selectedItems={this._getPeoplePickerItems}    
                showHiddenInUI={false}    
                principalTypes={[PrincipalType.User]}    
                resolveDelay={1000} 
                />  
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  private _getPeoplePickerItems(items: any[]) {  
    console.log('Items:', items);  
  }  
}
