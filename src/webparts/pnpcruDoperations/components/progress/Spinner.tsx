import * as React from 'react';
import { Spinner } from 'office-ui-fabric-react/lib/Spinner';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Label } from 'office-ui-fabric-react/lib/Label';

export const SpinnerExample: React.FunctionComponent = () => {
  const stackTokens: IStackTokens = {
    childrenGap: 20,
  };

  return (
    <Stack tokens={stackTokens}>
      <div>
        <Spinner label="loading..." />
      </div>
    </Stack>
  );
};