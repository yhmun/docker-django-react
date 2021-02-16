import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const links = [
      { 
        name: 'Home', 
        url: '/',
      },
      { 
        name: 'Todos', 
        url: '/todos',
      },
    ];

    return (
      <header className="fixed-top">
        <Container>
          <Row>
            <Col>
              <nav className="navbar navbar-expand navbar-dark">
                <ul className="navbar-nav mr-auto">
                  {links.map((link, key) => (
                    <li 
                      key={key}
                      className="nav-item"
                    >
                      <Link 
                        className="nav-link" 
                        to={link.url}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default NavBar;
