import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router/routes';

export const SubmoduleListScene: React.FC = () => {
  return (
    <>
      <h1>Submodule list Scene!</h1>
      <Link to={routes.employeeList}>Navigate employee list</Link>
    </>
  );
};
