import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import * as bcrypt from 'bcrypt';
import { Model } from "mongoose";

@Injectable()
export class RegisterService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {  }

  async register (body) {
    const { email, password } = body;

    const candidate = await this.userModel.findOne({email});

    if (candidate) {
      throw new HttpException("this user is registred", HttpStatus.BAD_REQUEST);
    }

    let modifedData:any = {};

    modifedData = body;

    if (password && email) {
      let hashPassword = await bcrypt.hashSync(password, 10);

      modifedData.password = hashPassword;

      let createdUser = await this.userModel.create(modifedData);

      let sendData = createdUser.toObject();

      sendData.id = sendData._id;
      delete sendData._id;
      delete sendData.__v;

      return sendData
    } else {
      throw new HttpException("password or email not", HttpStatus.BAD_REQUEST);
    }
  }

}
