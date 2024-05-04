import { Context, TypedResponse } from 'hono/mod.ts';
import { Schema } from 'zod';
import { IBaseResponse } from '@/types';

const schemaValidator = <T>(schema: Schema) => {
  return async (
    value: T,
    context: Context,
  ): Promise<Response & TypedResponse<Omit<IBaseResponse, 'message'>> | T> => {
    const parsed = await schema.safeParseAsync(value);

    if (!parsed?.success) {
      return context.json({
        statusCode: 400,
        errors: parsed.error.errors?.map((err) => ({
          [`${err.path}`]: err.message,
        })),
      });
    }

    return parsed.data;
  };
};

export default schemaValidator;
