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
        key:'key0'
      },
      {
        name: 'Reservas',
        url: '#/',
        key: 'key1',
      },
      {
        name: 'Lista de Espera',
        url: '#/listaDeEspera',
        key: 'key2',
      },
      {
        name: 'Alta Auto',
        url: '#/formularioAuto',
        key: 'key3',
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
      selectedKey="key2"
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