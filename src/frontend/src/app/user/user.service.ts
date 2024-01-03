import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../auth/schemas/user.schema";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {  }

  async getAll(query) {
    const data = await this.userModel.find(query);

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
    const data = await this.userModel.findById(id);

    let modifedData = data.toObject();

    modifedData.id = modifedData._id;
    delete modifedData._id;
    delete modifedData.__v;

    return modifedData;
  }

  async update (id, body) {
    const  updatedData = await this.userModel.findByIdAndUpdate(
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

  async remove(id) {
    await this.userModel.findByIdAndDelete(id);

    throw new HttpException("post deleted", HttpStatus.OK);
  }
}
