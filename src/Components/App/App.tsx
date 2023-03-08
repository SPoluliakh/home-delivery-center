import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const DepartureStatusPage = lazy(() =>
  import('../../Pages/DepartureStatusPage/DepartureStatusPage').then(
    module => ({
      ...module,
      default: module.DepartureStatusPage,
    })
  )
);

const DepartmentsPage = lazy(() =>
  import('../../Pages/DepartmentsPage/DepartmentsPage').then(module => ({
    ...module,
    default: module.DepartmentsPage,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="departure-statusList" />} />
        <Route path="departure-statusList" element={<DepartureStatusPage />} />
        <Route path="departments-list" element={<DepartmentsPage />} />
      </Route>
    </Routes>
  );
};
