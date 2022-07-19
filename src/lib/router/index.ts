import React from 'react';
import ReactDOM from 'react-dom/client';

import { NotFound } from './NotFound';

interface Route {
  url: string;
  component: React.FC;
}

export function createRouter({
  routes,
  target,
}: {
  routes: Route[];
  target: HTMLElement;
}) {
  const pathname = window.location.pathname;
  const matched = routes.find((route) => route.url === pathname);

  const matchedComponent = matched?.component ?? NotFound;

  ReactDOM.createRoot(target as HTMLElement).render(
    React.createElement(React.StrictMode, {
      children: React.createElement(matchedComponent),
    })
  );
}
