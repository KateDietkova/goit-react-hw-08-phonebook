import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Box } from './Box/Box';

export const Layout = () => {
  return (
    <Box pl="20px" pr="20px" maxWidth="1200px" m="0 auto">
      <AppBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
