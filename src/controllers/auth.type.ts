export interface IRegisterSchema {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  repeatPassword: string;
}
