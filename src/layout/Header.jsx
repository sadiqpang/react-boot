import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link> <Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link> <Link to="/about">About</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link > <Link to="/contact">Contact</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;