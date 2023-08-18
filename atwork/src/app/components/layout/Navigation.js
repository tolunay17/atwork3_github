import { Fragment } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavbarText, Nav, NavItem, NavLink } from 'reactstrap';
import { UserContextNavigation } from '../auth';

const routes = [
  {
    title: 'Home',
    type: 'internal',
    path: '/home'
  },
  {
  title: 'Blogs',
  type: 'internal',
  path: '/blogs'
},
{
  title: 'Portfolios',
  type: 'internal',
  path: '/portfolio'
},
  {
    title: 'Communities',
    type: 'internal',
    path: '/communities'
  },
{
  title: 'Contact',
  type: 'internal',
  path: '/contact'
},
{
  title: 'About',
  type: 'internal',
  path: '/about'
},
];

const Navigation = () => {
  return (
    <>
      <Nav
        className="me-auto"
        navbar
      >
        {routes && routes.map(route => 
          <NavItem key={route.path}>
            <NavLink tag={RRNavLink} to={route.path}>
              {route.title}
            </NavLink>
          </NavItem>
        )}
       
      </Nav>
      <Nav>
        <UserContextNavigation/>
      </Nav>
    </>
  )
};

export default Navigation;