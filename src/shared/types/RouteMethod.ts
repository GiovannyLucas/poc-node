import HttpMethods from '../enum/HttpMethods';

type RouteMethod<T> = {
  httpMethod: HttpMethods;
  // Expected method name in a controller. (i.e. "findAll" or "create")
  methodName: keyof T;
  // URL path (i.e. "/" or "/:id")
  path: string;
  // Default status code for request
  standardCode: number;
};

export default RouteMethod;