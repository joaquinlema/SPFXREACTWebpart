import * as React from 'react';
import { ActionButton, IIconProps } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  action?: any;
  iconName?: string;
}

export const ButtonAction: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked, label, action, iconName } = props;
  const addFriendIcon: IIconProps = { iconName: iconName };

  return (
    <ActionButton 
        iconProps={addFriendIcon} 
        allowDisabledFocus 
        disabled={disabled} 
        checked={checked}
        onClick={action}
        >
      {label}
    </ActionButton>
  );
};