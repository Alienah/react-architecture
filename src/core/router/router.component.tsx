import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  LoginScene,
  SubmoduleListScene,
  EmployeeListScene,
  EmployeeScene,
} from 'scenes';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={[switchRoutes.root, switchRoutes.login]}>
          <LoginScene />
        </Route>
        <Route exact={true} path={switchRoutes.submoduleList}>
          <SubmoduleListScene />
        </Route>
        <Route exact={true} path={switchRoutes.employeeList}>
          <EmployeeListScene />
        </Route>
        <Route exact={true} path={switchRoutes.editEmployee}>
          <EmployeeScene />
        </Route>
      </Switch>
    </HashRouter>
  );
};
