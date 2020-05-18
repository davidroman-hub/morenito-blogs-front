import {useState} from 'react';
import {APP_NAME} from '../config'
import Link from 'next/Link'
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
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link href="/signup">
                          <NavLink>
                            Registro
                          </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/signin">
                          <NavLink>
                            Inicia Sesión
                          </NavLink>
                        </Link>
                    </NavItem>
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
                  <NavbarText>Simple Text</NavbarText>
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
