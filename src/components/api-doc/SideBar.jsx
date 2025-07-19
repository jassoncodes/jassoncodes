import { NavLink } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';

// import {Nav, Navbar, NavbarToggle, NavDropdown} from 'react-bootstrap';
import { DropdownButton, DropdownItem, Navbar } from 'react-bootstrap';

export const SideBar = () =>
{
    return (
        <Navbar
            collapseOnSelect
            expand={'md'}
            bg=''
            className="d-flex flex-column"
        >
            <ListGroup.Item action>
                <NavLink className="d-flex flex-fill p-2 justify-content-center nav-link border-bottom mb-2" to={"/how-to"}>How to use?</NavLink>
            </ListGroup.Item>
            <DropdownButton title='select' className="d-flex flex-fill justify-content-center" variant='flush'>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to={"/me"}>/api/me</NavLink></DropdownItem>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to="/about">/api/about</NavLink></DropdownItem>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to="/experience">/api/experience</NavLink></DropdownItem>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/studies'>/api/studies</NavLink></DropdownItem>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/project'>/api/project</NavLink></DropdownItem>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/contact'>/api/contact</NavLink></DropdownItem>
                <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/data'>/api/data</NavLink></DropdownItem>
            </DropdownButton>
        </Navbar>
    )
}
