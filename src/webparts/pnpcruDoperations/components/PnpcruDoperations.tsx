import * as React from 'react';
import SharepointState from './context/sharepoint/SharepointState';
import  Botonera  from './buttons/botonera';
import {IPnpcruDoperationsProps} from './IPnpcruDoperationsProps'
import styles from './PnpcruDoperations.module.scss';
import Header from './header/header'

const PnpcruDoperations = (props: IPnpcruDoperationsProps) => {
  
  return (
    <SharepointState>
      <div className={ styles.container }>
        <Header />
      </div>
      <Botonera />
    </SharepointState>
  )
}

export default PnpcruDoperations;
