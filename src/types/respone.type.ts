import { StatusCode } from 'hono/utils/http-status.ts';

export interface IBaseResponse {
  statusCode: StatusCode;
  message: string;
  errors: Record<string, string>[];
}

export interface IResponseWithData<T> extends IBaseResponse {
  data: T;
}
