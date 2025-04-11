import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

import App from '@/App';

const rootRoute = createRootRoute({
  component: App,
  errorComponent: () => <div>❌ Error</div>,
});

const indexRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: () => <div>This is Home</div>,
  loader: async () => {
    return { message: 'Hello from loader!' };
  },
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });
