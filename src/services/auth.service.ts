import { eq } from 'drizzle-orm';
import { IBaseResponse } from '@/types';
import { IRegisterSchema } from '../controllers/auth.type.ts';
import { db, users } from '@/models';
import * as bcrypt from 'bcrypt';

class AuthService {
  public async createAccount(data: IRegisterSchema): Promise<
    Omit<IBaseResponse, 'errors'> | Omit<IBaseResponse, 'message'>
  > {
    try {
      data.password = await bcrypt.hash(data.password, await bcrypt.genSalt(8));
      const result = await db.select().from(users).where(
        eq(users.email, data.email),
      );

      if (result.length > 0) {
        return {
          statusCode: 400,
          message: 'You already have an account',
        };
      }

      await db.insert(users).values(data);
      return {
        statusCode: 201,
        message: 'Register successfully',
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: (err as Error)?.message || 'Internal server',
      };
    }
  }
}

export default AuthService;
