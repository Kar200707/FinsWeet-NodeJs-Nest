import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Post, PostDocument } from "./schemas/post.schema";
import { Model } from "mongoose";

@Injectable()
export class PostService {

  constructor (@InjectModel(Post.name) private postModel: Model<PostDocument>) {  }


  async getAll (query: object){
    const data = await this.postModel.find(query);

    let modifedData = [];
    data.forEach((item, i):void =>{
      let obj = item.toObject();

      obj.id = obj._id;
      delete obj._id;
      delete obj.__v;

      modifedData[i] = obj;
    })

    return modifedData;
  }

  async getOne (id: string) {
    const data = await this.postModel.findById(id);

    let modifedData = data.toObject();

    modifedData.id = modifedData._id;
    delete modifedData._id;
    delete modifedData.__v;

    return modifedData;
  }

  async update (id, body) {
    const  updatedData = await this.postModel.findByIdAndUpdate(
      id,
      body,
      {new: true}
    )

    let modifedData = updatedData.toObject();

    modifedData.id = modifedData._id;
    delete modifedData._id;
    delete modifedData.__v;

    return modifedData
  }

  async create(body) {
    const createdData = await this.postModel.create(body)
    let modifedData = createdData.toObject();

    modifedData.id = modifedData._id;
    delete modifedData._id;
    delete modifedData.__v;

    return modifedData;
  }

  async remove(id) {
    await this.postModel.findByIdAndDelete(id);

    throw new HttpException("post deleted", HttpStatus.OK);
  }
}
