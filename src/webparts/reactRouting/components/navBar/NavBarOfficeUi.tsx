import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '#/',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'Reservas',
            url: '#/',
            key: 'key1',
          },
          {
            name: 'Lista de Espera',
            url: '#/',
            disabled: true,
            key: 'key2',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Alta Auto',
        url: '#/formularioAuto',
        key: 'key3',
        isExpanded: true,
      },
      {
        name: 'About',
        url: '#/about',
        key: 'key4',
      },
    ],
  },
];

const NavBarOfficeUi: React.FunctionComponent = () => {
  return (
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

export default NavBarOfficeUi