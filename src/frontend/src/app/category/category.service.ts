import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument } from "./schemas/category.schema";
import { Model } from "mongoose";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private cateogryModel: Model<CategoryDocument>) {  }


  async getAll(query: object){
    const dbData:any = await this.cateogryModel.find(query);

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

  async getOne(id){
    const dbData:any = await this.cateogryModel.findById(id);

    let modifedData = dbData.toObject();
    modifedData.id = modifedData._id;
    delete modifedData._id;
    delete modifedData.__v;

    return modifedData;
  }

  async create(body){
    const createdData:any = await this.cateogryModel.create(body);
    return createdData;
  }

  async update(id, body) {
    const updatedData:any = await this.cateogryModel.findByIdAndUpdate(
      id,
      body,
      {new: true}
    );

    return updatedData
  }

  async remove(id) {
    await this.cateogryModel.findByIdAndDelete(id)
    return { message: `delete id:${id} successfully` }
  }
}
