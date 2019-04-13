// This is the parent component of AdminMyAccount, AdminAroma & AdminPython.
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './AdminWineHouse.scss';
import {
  Col,
  Row,
  Container,
  Button,
} from 'reactstrap';
import AdminMyAccount from './AdminMyAccount';
import NavBar from './NavBar';
import AdminAroma from './AdminAroma';
import AdminPython from './AdminPython';

class AdminWineHouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    const height = window.innerHeight - 77;
    this.setState({
      height,
    });
  }

  render() {
    const { height } = this.state;
    return (
      <div className="AdminWineHouse" style={{ minHeight: height }}>
        <NavBar />
        <Container fluid className="container-dashboardAdmin">
          <Router>
            <Row>
              <Col md={3} className="menu-dashboardAdmin" style={{ minHeight: height }}>
                <Link to="/admin-wine-house/account">
                  <Button className="item-menu-dashboardAdmin">
                    <i className="fas fa-user" />
                    Gérer les comptes
                  </Button>
                </Link>
                <Link to="/admin-wine-house/">
                  <Button className="item-menu-dashboardAdmin">
                    <i className="fas fa-comments" />
                    Gérer l analyse des commentaires
                  </Button>
                </Link>
                <Link to="/admin-wine-house/aroms">
                  <Button className="item-menu-dashboardAdmin">
                    <i className="fas fa-apple-alt" />
                    Gérer les aromes
                  </Button>
                </Link>
              </Col>
              <Col md={9}>
                <Route path="/admin-wine-house/account" component={AdminMyAccount} />
                <Route exact path="/admin-wine-house/" component={AdminPython} />
                <Route path="/admin-wine-house/aroms" component={AdminAroma} />
              </Col>
            </Row>
          </Router>
        </Container>
      </div>
    );
  }
}

export default AdminWineHouse;
