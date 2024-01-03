import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { privacyPolices, privacyPolicesDocument } from "./schemas/privacy-polices.schema";
import { Model } from "mongoose";

@Injectable()
export class PrivacyPolicesService {
  constructor(@InjectModel(privacyPolices.name) private privacyPolicesModel: Model<privacyPolicesDocument>) {  }


  async getAll() {
    const data = await this.privacyPolicesModel.find();

    return data[0];
  }

  async update(body) {
    const updatedData = await this.privacyPolicesModel.findByIdAndUpdate(
      '6575504bf5d49abef1835df5',
      body,
      { new: true }
    )

    return updatedData[0];
  }
}
