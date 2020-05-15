import * as React from 'react';
import { useContext,Fragment } from 'react';
import styles from '../PnpcruDoperations.module.scss';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { SpinnerExample } from '../progress/Spinner';
import {ButtonAction} from '../buttons/Actionbutton';
import SharepointContext from '../context/sharepoint/sharepointContext';

const botonera = () => {
    
    const sharepointContext = useContext(SharepointContext);
    const { 
        loading, 
        label, 
        create,
        read,
        updateItem,
        deleteItem } = sharepointContext;

    if(loading) return <SpinnerExample />
      
      return (
        <Fragment>
        <div className={ styles.pnpcruDoperations }>
          
          <div className={ styles.container }>

            <div className={ styles.row }>
              <ButtonAction 
              label={"Create"}
              action={create}
              iconName='Add'
              />

              <ButtonAction 
              label={"Read"}
              action={read}
              iconName='AccountActivity'
              />

              <ButtonAction 
              label={"Update"}
              action={updateItem}
              iconName='Sync'
              />

              <ButtonAction 
              label={"Delete"}
              action={deleteItem}
              iconName='Blocked2Solid'
              />

            </div>

            <div className={styles.row}>
              <div className={styles.description}>
              <Label>{label}</Label>
              </div>
            </div>
          </div>

        </div>
        </Fragment>
      );
}

export default botonera
