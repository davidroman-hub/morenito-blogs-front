import {useState} from 'react';
import {APP_NAME} from '../config'
import Router from 'next/router'
import Link from 'next/Link'
import {signout, isAuth} from '../actions/auth'
import NProgress from 'nprogress'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();



const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);;
    }
    return (
      
            <div>
              <Navbar color="light" light expand="md">
                <Link href="/">
                  <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  
                    {!isAuth() && (
                      <React.Fragment>
                         <NavItem  style={{cursor:'pointer'}}>
                         <Link href="/signin">
                           <NavLink>
                             Inicia Sesión
                           </NavLink>
                         </Link>
                     </NavItem> 
                     <NavItem  style={{cursor:'pointer'}}>
                        <Link href="/signup">
                          <NavLink>
                            Registro
                          </NavLink>
                        </Link>
                    </NavItem>
                     </React.Fragment>
                    )}
                  
                    {/* {JSON.stringify(isAuth())} */}
                   
                  {isAuth() && isAuth().role == '0' && (
                        <NavItem  style={{cursor:'pointer'}}>
                        <Link href="/user">
                          <NavLink>
                            {isAuth().name}
                           </NavLink>
                        </Link>
                      </NavItem>
                  )}
                   {isAuth() && isAuth().role == '1' && (
                        <NavItem  style={{cursor:'pointer'}}>
                        <Link href="/admin">
                          <NavLink>
                            Admin
                           </NavLink>
                        </Link>
                      </NavItem>
                  )}
                   {isAuth() && (
                      <NavItem>
                        <NavLink style={{cursor:'pointer'}} onClick={() => signout(() => Router.replace(`/signin`) )}>
                          Salir de la Sesión
                        </NavLink>
                  </NavItem>
                  
                  
                    )}  
                    
                    <UncontrolledDropdown nav inNavbar>
                      {/* <DropdownToggle nav caret>
                        Options
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Option 1
                        </DropdownItem>
                        <DropdownItem>
                          Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Reset
                        </DropdownItem>
                      </DropdownMenu> */}
                    </UncontrolledDropdown>
                  </Nav>
                  {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
              </Navbar>
            </div>
          );  
    
}

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

 
// }

export default Header;
