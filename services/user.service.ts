import { injectable } from "tsyringe";

import UserModel from "../models/user.model";
import BaseService from "./base.service";

@injectable()
export default class UserService extends BaseService {
  constructor(modelI?: UserModel) {
    super(modelI);
  }
}