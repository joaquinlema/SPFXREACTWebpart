import * as React from 'react';
import SharepointContext from '../context/sharepoint/sharepointContext';
import { useContext,Fragment } from 'react';

const header = () => {
    const sharepointContext = useContext(SharepointContext);
    const {titulo} = sharepointContext;
    return (
        <Fragment>
            <h1>{titulo}</h1>
        </Fragment>
    );
}

export default header;
