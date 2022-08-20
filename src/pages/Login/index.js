import React from 'react';

const LazyLoginPage = React.lazy(() => import('./LoginForm'));

export default LazyLoginPage;
