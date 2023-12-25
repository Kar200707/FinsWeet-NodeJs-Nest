import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from "../schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class LoginService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {  }

  async signIn(body) {
    const { email, password } = body;

    if (email && password) {
        const data:any = await this.userModel.findOne({email: email});

        if (bcrypt.compareSync(password, data.password)) {
          let modifedData = data.toObject();

          modifedData.id = modifedData._id;
          delete modifedData._id;
          delete modifedData.__v;

          return { accessToken: data.password, user: modifedData };
        } else {
          throw new HttpException("password or email is false", HttpStatus.BAD_REQUEST);
        }
    } else {
      throw new HttpException("password or email not", HttpStatus.BAD_REQUEST);
    }
  }

}
