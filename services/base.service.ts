import mongoose from "mongoose";

import ModelI from "../interfaces/model.interface";

export default class BaseService {
  model?: mongoose.Model<any, any>;

  constructor(modelI?: ModelI) {
    if (modelI) {
      this.model = modelI?.model;
    }
  }

  post = async <T>(data: T) => {
    const resources = await this.model?.create(data);
    console.log('resources', resources);
    return resources;
  }

  get = async <T>(filters = {}) => {
    return await this.model?.find(filters) as T[];
  }
}
