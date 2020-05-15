import * as React from 'react';
import SharepointState from './context/sharepoint/SharepointState';
import  Botonera  from './buttons/botonera';
import {IPnpcruDoperationsProps} from './IPnpcruDoperationsProps'

const PnpcruDoperations = (props: IPnpcruDoperationsProps) => {
  
  return (
    <SharepointState>
      <Botonera />
    </SharepointState>
  )
}

export default PnpcruDoperations;
