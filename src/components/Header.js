import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
        <h1>Expensify</h1>
          <NavLink to="/login" activeClassName="is-active" >Login</NavLink>
          <NavLink to="/about" activeClassName="is-active">About Us</NavLink>
          <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
          <NavLink to="/surveyPage" activeClassName="is-active" exact={true}>TakeSurvey</NavLink>
          <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
  </header>
);

export default Header;