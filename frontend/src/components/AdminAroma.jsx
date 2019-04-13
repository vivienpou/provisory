
/* This component is displayed on the website with
Mon compte > Espace Administrateur > Gérer les arômes;

This is the parent's component of AdminAromaFr & AdminAromaEng;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './AdminAroma.scss';
import AdminAromaFr from './AdminAromaFr';
import AdminAromaEng from './AdminAromaEng';

const AdminAroma = () => (
  <div className="AdminAroma">
    <Router>
      <div className="container-btn-lang-aroma-admin">
        <Link to="/admin-wine-house/aroms/">
          <Button className="btn-lang-aroma-admin">
            <img src="/images/fr-flag.png" alt="Français" className="img-lang-aroma-admin" />
          </Button>
        </Link>
        <Link to="/admin-wine-house/aroms/en">
          <Button className="btn-lang-aroma-admin">
            <img src="/images/uk-flag.png" alt="Anglais" className="img-lang-aroma-admin" />
          </Button>
        </Link>
        <Route exact path="/admin-wine-house/aroms/" component={AdminAromaFr} />
        <Route exact path="/admin-wine-house/aroms/en" component={AdminAromaEng} />
      </div>
    </Router>
  </div>
);

export default AdminAroma;
