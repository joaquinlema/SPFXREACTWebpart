import * as React from 'react';
import styles from './PeoplePickerWp.module.scss';
import { IPeoplePickerWpProps } from './IPeoplePickerWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";  

export default class PeoplePickerWp extends React.Component<IPeoplePickerWpProps, {}> {
  public render(): React.ReactElement<IPeoplePickerWpProps> {
    return (
      <div className={ styles.peoplePickerWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
