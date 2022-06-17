import mongoose from 'mongoose';
export interface UserI {
  email: string;
  name: string;
  password?: string;
}

export default interface UserSI extends UserI, mongoose.Document { }