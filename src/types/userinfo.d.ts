export default interface UserInfo  {
  username: string;
  password?: string;
  phone?: string;
  age?: string | number;
  gender?: string | number;
  id?: number;
  createAt?: string;
}