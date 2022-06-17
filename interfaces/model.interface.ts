import mongoose, { Model } from 'mongoose';

export default interface ModelI {
  schema: mongoose.Schema<any>;
  model: Model<any, any>;
}