import {Nav, NavDropdown} from "react-bootstrap";

function Navigation() {
    return(
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href={"/"}>Link</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Catégories" id="nav-dropdown">
                <NavDropdown.Item href={"/Category"}>Les Catégories</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ordinateur" id="nav-dropdown">
                <NavDropdown.Item href={"/Computer"}>Les Ordinateurs</NavDropdown.Item>
                <NavDropdown.Item href={"/Computer/add"}>Add Ordianteurs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Configuration" id="nav-dropdown">
                <NavDropdown.Item href={"/Os"}>Les Os</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={"/Category"}>Les Catégories</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}

export default Navigation