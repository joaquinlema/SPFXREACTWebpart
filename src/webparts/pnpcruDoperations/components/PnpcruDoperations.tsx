import * as React from 'react';
import styles from './PnpcruDoperations.module.scss';
import { IPnpcruDoperationsProps } from './IPnpcruDoperationsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { Label } from 'office-ui-fabric-react/lib/Label';
import { SpinnerExample } from './progress/Spinner'

import {IpnpcruDopeationsState } from './IpnpcruDopeationsState'
import {ButtonAction} from './buttons/Actionbutton'

export default class PnpcruDoperations extends React.Component<IPnpcruDoperationsProps, IpnpcruDopeationsState> {
  
  constructor(props : IPnpcruDoperationsProps, state : IpnpcruDopeationsState){
    super(props);

    this.state = {
      label : 'Sin Acciones aun',
      loading: false
    }
  }
  
  public render(): React.ReactElement<IPnpcruDoperationsProps> {
    if(this.state.loading) return <SpinnerExample />
    
    return (
      <div className={ styles.pnpcruDoperations }>
        
        <div className={ styles.container }>

          <div className={ styles.row }>
            <ButtonAction 
            label={"Create"}
            action={this.create}
            iconName='Add'
            />

            <ButtonAction 
            label={"Read"}
            action={this.read}
            iconName='AccountActivity'
            />

            <ButtonAction 
            label={"Update"}
            action={this.updateItem}
            iconName='Sync'
            />

            <ButtonAction 
            label={"Delete"}
            action={this.deleteItem}
            iconName='Blocked2Solid'
            />

          </div>

          <div className={styles.row}>
            <div className={styles.description}>
            <Label>{this.state.label}</Label>
            </div>
          </div>
        </div>

      </div>
    );
  }

  create = () => {
    this.setState({label:"cargando", loading: true});
    console.log('solo para probar merge');
    console.log('solo para probar mergedevgit a');

    sp.web.lists.getByTitle("Projects").items.add({
      Title: "PnPJS",
      Technology: "Javascript",
      Resources: "6",
    }).then((i) => {
      this.setState({label:"Item creado", loading: false});  
    });
  }

  read = () => {
    this.setState({label:"cargando", loading: true});

    sp.web.lists.getByTitle("Projects").items.getById(2).get().then((item: any) => {
      this.setState({label: item.Title, loading: false});
    })
  }

  updateItem = () =>{   
    this.setState({label:"cargando", loading: true});

    let list = sp.web.lists.getByTitle("Projects");
    list.items.getById(2).update({
        Title: "My New Title - SPFx",
        Technology: "Updated - SharePoint"
    }).then((i) => {
      this.setState({label: "My New Title - SPFx Updated", loading: false});
    }); 
  }

  deleteItem = () =>{  
    this.setState({label:"Eliminando item", loading: true});

    let list = sp.web.lists.getByTitle("Projects");
    list.items.getById(2).delete()
      .then(_ => {this.setState({label:'Eliminado', loading: false});});  
  }

}
