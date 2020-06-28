import { Router } from 'express';

import persist from './persist.routes';
import status from './status.routes';

const routes = Router();

routes.use('/status', status);
routes.use('/persist', persist);

routes.get('/', (request, response) => {
  return response.json({
    message: 'This is a Node.js server for an IoT dashboard.',
  });
});

export default routes;
