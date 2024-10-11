// src/pages/AdminDashboard.js
import React from 'react';
import Sidebar from '../components/Admin/Sidebar';
import Header from '../components/pages/header';
import Dashboard from '../components/Admin/Dashboard';
import Quotations from '../components/Admin/Quotations';
import Billing from '../components/Admin/Billing';
import History from '../components/Admin/History';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const AdminDashboard = () => {
  let { path } = useRouteMatch();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <Switch>
            <Route exact path={path} component={Dashboard} />
            <Route path={`${path}/quotations`} component={Quotations} />
            <Route path={`${path}/billing`} component={Billing} />
            <Route path={`${path}/history`} component={History} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

