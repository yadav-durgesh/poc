import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink
} from 'reactstrap';
import bn from '../utils/bemnames';
// import '../../assets/css/reduction.css';

const sidebarBackground = {
    backgroundColor:'#bfbfbf'
};

const SourceLink = props => {
    /* eslint-disable jsx-a11y/anchor-has-content */
    return (
      <a href={process.env.REACT_APP_SOURCE_URL} target="_blank" rel="noopener noreferrer" {...props} />
    );
  };

const navItems = [
    { to: '/', name: 'Home', exact: true, img:'AddDash' },
    { to: '/dashboard', name: 'Dashboard', exact: true, img:'AddDash' },
    { to: '/static', name: 'Static Table', exact: true, img:'AddDash' },
    { to: '/dynamic', name: 'Dynamic Table', exact: true, img:'AddDash' },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component{
    state = {
        isOpenComponents: true,
        isOpenContents: true,
        isOpenPages: true
    };

    handleClick = name => () => {
        this.setState(prevState => {
            const isOpen = prevState[`isOpen${name}`];
            return {
                [`isOpen${name}`]: !isOpen,
            };
        });
    };

    render(){
        return (
            <aside className={bem.b()} data-image={'sidebarBgImage'}>
                <div className={bem.e('background')} style={sidebarBackground}/>
                <div className={bem.e('content')}>
                    <Navbar className="TopLogo">
                        <a className="mr-auto" href="/">Company Logo</a>
                    </Navbar>
                    <Nav vertical>
                        {navItems.map(({ to, name, exact, img }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                                <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="TextMenus"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}>
                                    <img src={img} className="MenuIcon"/>
                                    <span className="">{name}</span>
                                </BSNavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;