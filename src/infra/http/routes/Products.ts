import { Response, Router } from 'express';

const productRoutes = Router({ mergeParams: true});

productRoutes.get('/', (request, response: Response) => {
  return response.send({ ok: 'products' });
});

export default () => productRoutes;