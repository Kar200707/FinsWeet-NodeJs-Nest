import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Subscribe, SubscribeDocument } from "./schemas/sub.schema";
import { Model } from "mongoose";

@Injectable()
export class SubscribeService {
  constructor(@InjectModel(Subscribe.name) private subModel: Model<SubscribeDocument>) {  }

  async getAll(){
    const dbData:any = await this.subModel.find();

    let modifedData = [];
    dbData.forEach((data, i):void =>{
      let obj = data.toObject();

      obj.id = obj._id;
      delete obj._id;
      delete obj.__v;

      modifedData[i] = obj;
    })

    return modifedData;
  }

  async create(body){
    const createdData:any = await this.subModel.create(body);
    return createdData;
  }
}
