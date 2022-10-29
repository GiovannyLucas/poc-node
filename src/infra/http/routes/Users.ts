import { Response, Router } from 'express';

const userRoutes = Router({ mergeParams: true});

userRoutes.get('/', (request, response: Response) => {
  return response.send({ ok: 'users' });
});

export default () => userRoutes;