import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Logo, LogoDocument } from "./schemas/logo.schema";
import { Model } from "mongoose";

@Injectable()
export class LogosService {
  constructor(@InjectModel(Logo.name) private logoModel: Model<LogoDocument>) {  }

  async getAll() {
    const data:any = await this.logoModel.find();

    let modifedData = [];
    data.forEach((data, i):void =>{
      let obj = data.toObject();

      delete obj._id;
      delete obj.__v;

      modifedData[i] = obj;
    })

    return modifedData;
  }

}
