import BaseService from "../services/base.service";

export default class BaseController {
  service?: BaseService;
  constructor(service?: BaseService) {
    this.service = service;
  }

  post = async (req: any, res: any) => {
    const resources = await this.service?.post(req.body);
    res.send(resources);
  }

  get = async (req: any, res: any) => {
    const resources = await this.service?.get();
    res.send(resources);
  }
}