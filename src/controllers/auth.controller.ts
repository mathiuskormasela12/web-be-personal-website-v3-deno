import { Hono, validator } from 'hono/mod.ts';
import { registerSchema } from './auth.schema.ts';
import { schemaValidator } from '@/middlewares';
import { IRegisterSchema } from './auth.type.ts';
import { AuthService } from '@/services';
import { IBaseResponse } from '@/types';
import { StatusCode } from 'hono/utils/http-status.ts';

const authController = new Hono();

authController.post(
  '/register',
  validator('json', schemaValidator<IRegisterSchema>(registerSchema)),
  async (context) => {
    const data = context.req.valid('json');
    const authService = new AuthService();
    const result = await authService.createAccount(data);
    return context.json<
      Omit<IBaseResponse, 'errors'> | Omit<IBaseResponse, 'message'>,
      StatusCode
    >(result, result.statusCode);
  },
);

export default authController;
